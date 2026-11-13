// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Play page - Canvas Start Game
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Preserve the generated action-input state and exact payload transport
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state


export type PlayPageCanvasStartGameActionId = "start-game-1";

export interface PlayPageCanvasStartGameProps {
  actions?: {
    "start-game-1"?: () => void;
  };
  /** STATE_HIGH_SCORE value bound to OBS_START_GAME_HIGH_SCORE_DISPLAY. */
  highScore?: number | null;
  /** STATE_GAME_MESSAGE value bound to OBS_START_GAME_START_FEEDBACK. */
  gameMessage?: string;
}

export type PlayPageCanvasStartGameActionCallbacks = NonNullable<PlayPageCanvasStartGameProps["actions"]>;

export function PlayPageCanvasStartGame({ actions, highScore = null, gameMessage = "" }: PlayPageCanvasStartGameProps) {
  return (
    <>
      {/* Root Surface: SURF_PLAY_PAGE */}
        <div data-surface-id="SURF_PLAY_PAGE" className="min-h-screen flex flex-col justify-between p-6 lg:p-10 max-w-7xl mx-auto w-full" data-setfarm-element-ref="E000001" data-observable-refs="OBS_START_GAME_PLAY_ROUTE_RETENTION">
          
          {/* Top Navigation Chrome / Status Header (Static, Non-actionable) */}
          <header className="flex items-center justify-between border-b border-slate-800 pb-5 mb-6">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center font-bold text-lg text-white shadow-lg shadow-indigo-500/30">
                C
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-tight text-white">Canvas Start Game</h1>
                <p className="text-xs text-slate-400">Retro Arcade Series</p>
              </div>
            </div>
      
            {/* Scoreboard Display */}
            <div className="flex items-center space-x-6">
              <div className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-right">
                <span className="block text-[10px] uppercase font-semibold tracking-wider text-slate-400">Current Score</span>
                <span className="text-lg font-mono font-bold text-slate-200">0</span>
              </div>
      
              <div className="bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-right">
                <span className="block text-[10px] uppercase font-semibold tracking-wider text-slate-400">High Score</span>
                {/* OBS_START_GAME_HIGH_SCORE_DISPLAY: role="status", name="High score", expected before: null / after: 0 */}
                <div className="text-lg font-mono font-bold text-amber-400" data-setfarm-element-ref="E000002" role="status" aria-label="High score" data-observable-refs="OBS_START_GAME_HIGH_SCORE_DISPLAY" data-value={typeof highScore === "number" ? String(highScore) : undefined}>{typeof highScore === "number" ? String(highScore) : ""}</div>
              </div>
            </div>
          </header>
      
          {/* Main Game Section containing the Canvas and Control Panel */}
          <main className="flex-1 flex flex-col lg:flex-row gap-8 items-stretch justify-center my-auto">
            
            {/* Contained Surface: SURF_GAME_CANVAS */}
            <div data-surface-id="SURF_GAME_CANVAS" className="relative flex-1 bg-slate-900 border-2 border-slate-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col items-center justify-center min-h-[480px] p-6" data-setfarm-element-ref="E000003">
              
              {/* Subtle Grid Backdrop simulating Retro Canvas Viewport */}
              <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-40 pointer-events-none"></div>
      
              {/* Canvas Visual Graphics / Game Field Placeholder */}
              <div className="relative z-10 flex flex-col items-center text-center max-w-md">
                <div className="w-20 h-20 mb-6 rounded-2xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 shadow-inner">
                  <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z"></path>
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                  </svg>
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Arena Ready</h2>
                <p className="text-sm text-slate-400 mb-6">Interactive 2D Canvas viewport awaiting start trigger. Frame rate locked at 60 FPS.</p>
                <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-slate-800/80 border border-slate-700 text-xs font-mono text-slate-300">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>SYSTEM STANDBY</span>
                </div>
              </div>
      
              {/* Corner Details */}
              <div className="absolute top-4 left-4 text-[11px] font-mono text-slate-500">CANVAS_RES: 1920x1080</div>
              <div className="absolute bottom-4 right-4 text-[11px] font-mono text-slate-500">ENGINE: V2_STATIC</div>
            </div>
      
            {/* Control Sidebar / Operations Deck */}
            <div className="w-full lg:w-80 flex flex-col justify-between bg-slate-900/60 border border-slate-800/80 rounded-2xl p-6 backdrop-blur-sm">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">Command Center</h3>
                
                <div className="space-y-4 mb-6">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs text-slate-400 block mb-1">Route Status</span>
                    <div className="text-sm font-mono text-indigo-400 font-semibold">/play</div>
                  </div>
      
                  {/* OBS_START_GAME_START_FEEDBACK: role="status", name="Game feedback", expected after: "Game started" */}
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                    <span className="text-xs text-slate-400 block mb-1">Live Notifications</span>
                    <div className="text-sm font-medium text-emerald-400 min-h-[1.25rem]" data-setfarm-element-ref="E000004" role="status" aria-label="Game feedback" data-observable-refs="OBS_START_GAME_START_FEEDBACK" data-value={gameMessage}>{gameMessage}</div>
                  </div>
                </div>
              </div>
      
              <div>
                <div className="bg-indigo-950/30 border border-indigo-900/40 rounded-xl p-4 mb-6">
                  <p className="text-xs text-indigo-300 leading-relaxed">
                    Press the primary control button below to initialize the play arena and begin score tracking.
                  </p>
                </div>
      
                {/* Physical Control Slot: CSLOT_START_GAME_START_BUTTON */}
                <button type="button" data-action="ACT_START_GAME" data-control-slot="CSLOT_START_GAME_START_BUTTON" className="w-full py-4 px-6 rounded-xl bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 text-white font-semibold text-base shadow-lg shadow-indigo-600/30 transition-colors duration-150 flex items-center justify-center space-x-2 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:ring-offset-slate-950 cursor-pointer" data-setfarm-element-ref="E000005" data-observable-refs="OBS_START_GAME_START_BUTTON_AVAILABILITY" data-action-id="start-game-1" onClick={actions?.["start-game-1"]}>
                  <span>Start game</span>
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 5l7 7-7 7M5 5l7 7-7 7"></path>
                  </svg>
                </button>
              </div>
      
            </div>
      
          </main>
      
          {/* Footer Chrome (Static, Non-actionable) */}
          <footer className="mt-8 pt-4 border-t border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500">
            <p>© 2025 Canvas Start Game. All rights reserved.</p>
            <p className="font-mono mt-2 sm:mt-0">DSGS_001 • DESKTOP VIEWPORT</p>
          </footer>
      
        </div>
    </>
  );
}
