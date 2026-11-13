/**
 * ACT_START_GAME - the closed action contract of US-001.
 *
 * State deltas (native contract):
 *   STATE_APPLICATION_STATUS = "playing"
 *   STATE_HIGH_SCORE         = 0
 *   STATE_GAME_MESSAGE       = "Game started"
 * Navigation: stay (the current route is retained).
 */

import type { ProductCanvasStartGameState } from "../prod-canvas-start-game/prod-canvas-start-game.types";

export const START_GAME_MESSAGE = "Game started";
export const START_GAME_STATUS = "playing";
export const START_GAME_HIGH_SCORE = 0;

/** Applies the ACT_START_GAME state deltas to the current runtime state. */
export function applyStartGame(state: ProductCanvasStartGameState): ProductCanvasStartGameState {
  return {
    applicationStatus: START_GAME_STATUS,
    gameMessage: START_GAME_MESSAGE,
    highScore: START_GAME_HIGH_SCORE,
  };
}
