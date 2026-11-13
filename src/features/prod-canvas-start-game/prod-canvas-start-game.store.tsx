import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState, type ReactNode } from "react";

import { initialProductState } from "../../__fixtures__/prod-canvas-start-game.fixture";
import { installTestBridge } from "../../test/bridge";
import { applyStartGame } from "../surf-play-page/act_start_game";
import { readPersistedGameProgress, writePersistedGameProgress } from "./prod-canvas-start-game.repo";
import {
  PRODUCT_ACTIONS,
  type ProductCanvasStartGameState,
} from "./prod-canvas-start-game.types";

export interface ProductCanvasStartGameContextValue {
  state: ProductCanvasStartGameState;
  startGame: () => void;
}

const ProductCanvasStartGameContext = createContext<ProductCanvasStartGameContextValue | null>(null);

export function useProductCanvasStartGame(): ProductCanvasStartGameContextValue {
  const value = useContext(ProductCanvasStartGameContext);
  if (!value) {
    throw new Error("ProductCanvasStartGameProvider is missing");
  }
  return value;
}

/**
 * Holds the runtime state of the closed US-001 component and wires the
 * ACT_START_GAME action, its persistence effect and the runtime test bridge.
 */
export function ProductCanvasStartGameProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<ProductCanvasStartGameState>(() => {
    // PERSIST_HIGH_SCORE_LOCAL_STORAGE rehydrates on initialization.
    const persisted = readPersistedGameProgress();
    return { ...initialProductState, highScore: persisted.high_score };
  });

  const stateRef = useRef(state);
  stateRef.current = state;

  const startGame = useCallback(() => {
    setState((current) => applyStartGame(current));
  }, []);

  // PERSIST_HIGH_SCORE_LOCAL_STORAGE (write) on the ACT_START_GAME state path.
  useEffect(() => {
    if (typeof state.highScore === "number") {
      writePersistedGameProgress(state.highScore);
    }
  }, [state.highScore]);

  useEffect(() => {
    installTestBridge({
      getStates: () => ({
        STATE_APPLICATION_STATUS: stateRef.current.applicationStatus,
        STATE_GAME_MESSAGE: stateRef.current.gameMessage,
        STATE_HIGH_SCORE: stateRef.current.highScore,
      }),
      invokeAction: (actionRef, input) => {
        if (actionRef !== PRODUCT_ACTIONS.startGame && actionRef !== "start-game-1") {
          return { ok: false, actionRef };
        }
        startGame();
        return { ok: true, actionRef: PRODUCT_ACTIONS.startGame, input: input ?? {} };
      },
    });
  }, [startGame]);

  const value = useMemo<ProductCanvasStartGameContextValue>(() => ({ state, startGame }), [state, startGame]);

  return <ProductCanvasStartGameContext.Provider value={value}>{children}</ProductCanvasStartGameContext.Provider>;
}
