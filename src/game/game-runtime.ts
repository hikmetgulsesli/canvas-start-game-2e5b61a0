/**
 * Runtime helpers for the Canvas Start Game product.
 *
 * The product is a single-entry game application: the entrypoint is mounted at
 * "/" and serves the play route (ROUTE_PLAY, path "/play"). Navigation for
 * ACT_START_GAME is "stay", so the resolved route is never rewritten by the
 * action.
 */

export const PLAY_ROUTE_REF = "ROUTE_PLAY";
export const PLAY_ROUTE_PATH = "/play";

export type RouteRef = typeof PLAY_ROUTE_REF | "ROUTE_UNKNOWN";

/** Resolves the active route for a given location pathname. */
export function resolveRouteRef(pathname: string): RouteRef {
  if (typeof pathname !== "string") return "ROUTE_UNKNOWN";
  const normalized = pathname.length > 1 && pathname.endsWith("/") ? pathname.slice(0, -1) : pathname;
  if (normalized === PLAY_ROUTE_PATH || normalized === "/" || normalized === "") {
    return PLAY_ROUTE_REF;
  }
  return "ROUTE_UNKNOWN";
}

/** True when the given pathname is served by the play route. */
export function isPlayRoute(pathname: string): boolean {
  return resolveRouteRef(pathname) === PLAY_ROUTE_REF;
}
