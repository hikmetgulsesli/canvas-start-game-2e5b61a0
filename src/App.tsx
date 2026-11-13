import { useEffect, useState } from "react";

import { ProductCanvasStartGameProvider, useProductCanvasStartGame } from "./features/prod-canvas-start-game/prod-canvas-start-game.store";
import { resolveRouteRef } from "./game/game-runtime";
import { PlayPageCanvasStartGame } from "./screens/PlayPageCanvasStartGame";

function PlayRoute() {
  const { state, startGame } = useProductCanvasStartGame();

  return (
    <PlayPageCanvasStartGame
      actions={{ "start-game-1": () => startGame() }}
      highScore={state.highScore}
      gameMessage={state.gameMessage}
    />
  );
}

export default function App() {
  const [routeRef, setRouteRef] = useState(() =>
    resolveRouteRef(typeof window === "undefined" ? "/" : window.location.pathname),
  );

  useEffect(() => {
    const sync = () => setRouteRef(resolveRouteRef(window.location.pathname));
    window.addEventListener("popstate", sync);
    return () => window.removeEventListener("popstate", sync);
  }, []);

  if (routeRef !== "ROUTE_PLAY") {
    return <div data-setfarm-root="baseline" data-testid="setfarm-app-root" className="min-h-screen bg-slate-50 text-slate-950" />;
  }

  return (
    <div data-setfarm-root="app" data-testid="setfarm-app-root" className="min-h-screen bg-slate-950 text-slate-950">
      <ProductCanvasStartGameProvider>
        <PlayRoute />
      </ProductCanvasStartGameProvider>
    </div>
  );
}
