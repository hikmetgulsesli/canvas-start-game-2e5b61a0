/**
 * Fixtures for the closed US-001 component (ACT_START_GAME).
 *
 * The initial values mirror the native state contract:
 *   STATE_APPLICATION_STATUS = "ready"
 *   STATE_GAME_MESSAGE       = ""
 *   STATE_HIGH_SCORE         = null
 */

import type { ProductCanvasStartGameState } from "../features/prod-canvas-start-game/prod-canvas-start-game.types";

export const INITIAL_APPLICATION_STATUS = "ready";
export const INITIAL_GAME_MESSAGE = "";
export const INITIAL_HIGH_SCORE = null;

export const initialProductState: ProductCanvasStartGameState = {
  applicationStatus: INITIAL_APPLICATION_STATUS,
  gameMessage: INITIAL_GAME_MESSAGE,
  highScore: INITIAL_HIGH_SCORE,
};

export const PLAY_ROUTE_PATH = "/play";
export const PLAY_ROUTE_REF = "ROUTE_PLAY";
