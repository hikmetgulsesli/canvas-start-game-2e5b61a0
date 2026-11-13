/**
 * Types for the closed ProductSpecV2 component behind ACT_START_GAME.
 *
 * Authority: US-001 / ACT_START_GAME
 * - ENTITY_GAME_PROGRESS (field: high_score)
 * - STATE_APPLICATION_STATUS, STATE_GAME_MESSAGE, STATE_HIGH_SCORE
 * - PERSIST_HIGH_SCORE_LOCAL_STORAGE
 */

export const HIGH_SCORE_STORAGE_KEY = "setfarm.canvas_start_game.high_score_local_storage.v1";

export const PRODUCT_ACTIONS = {
  startGame: "ACT_START_GAME",
} as const;

export type ProductActionId = (typeof PRODUCT_ACTIONS)[keyof typeof PRODUCT_ACTIONS];

export type ApplicationStatus = "ready" | "playing";

export interface GameProgress {
  high_score: number | null;
}

export interface ProductCanvasStartGameState {
  /** STATE_APPLICATION_STATUS */
  applicationStatus: ApplicationStatus;
  /** STATE_GAME_MESSAGE */
  gameMessage: string;
  /** STATE_HIGH_SCORE */
  highScore: number | null;
}

export interface ProductCanvasStartGameActionInput {
  [field: string]: unknown;
}

export interface ProductCanvasStartGameActionResult {
  ok: boolean;
  actionRef: string;
  state: ProductCanvasStartGameState;
}

/** Mapping of the native state refs onto the runtime state object. */
export const STATE_REF_BY_KEY = {
  applicationStatus: "STATE_APPLICATION_STATUS",
  gameMessage: "STATE_GAME_MESSAGE",
  highScore: "STATE_HIGH_SCORE",
} as const;

export type StateKey = keyof typeof STATE_REF_BY_KEY;
