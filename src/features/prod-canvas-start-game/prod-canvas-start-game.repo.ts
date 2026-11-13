/**
 * Persistence adapter for PERSIST_HIGH_SCORE_LOCAL_STORAGE.
 *
 * The native policy binds a single browser-origin key to ENTITY_GAME_PROGRESS
 * and rehydrates on initialization. Durability is "reload".
 */

import { HIGH_SCORE_STORAGE_KEY, type GameProgress } from "./prod-canvas-start-game.types";

function storage(): Storage | null {
  try {
    if (typeof window === "undefined") return null;
    return window.localStorage ?? null;
  } catch {
    return null;
  }
}

/** Reads the persisted high score, rehydrating from the browser origin. */
export function readPersistedGameProgress(): GameProgress {
  const store = storage();
  if (!store) return { high_score: null };
  try {
    const raw = store.getItem(HIGH_SCORE_STORAGE_KEY);
    if (raw === null) return { high_score: null };
    const parsed = JSON.parse(raw) as Partial<GameProgress> | null;
    const value = parsed?.high_score;
    if (typeof value === "number" && Number.isFinite(value)) {
      return { high_score: value };
    }
    return { high_score: null };
  } catch {
    return { high_score: null };
  }
}

/** Writes the persisted high score (policy operation: write). */
export function writePersistedGameProgress(highScore: number): void {
  const store = storage();
  if (!store) return;
  try {
    store.setItem(HIGH_SCORE_STORAGE_KEY, JSON.stringify({ high_score: highScore }));
  } catch {
    /* persistence is best-effort; the visible state stays authoritative */
  }
}
