/**
 * Browser test bridge.
 *
 * The runtime evidence contract captures state through the global
 * `__SETFARM_TEST_BRIDGE__` and invokes actions through `invokeAction`.
 * State pointers are addressed as "/states/<STATE_REF>".
 */

export interface SetfarmTestBridgeStateSnapshot {
  [stateRef: string]: unknown;
}

export interface SetfarmTestBridge {
  states: SetfarmTestBridgeStateSnapshot;
  invokeAction: (actionRef: string, input?: Record<string, unknown>) => unknown;
}

export interface SetfarmTestBridgeOptions {
  getStates: () => SetfarmTestBridgeStateSnapshot;
  invokeAction: (actionRef: string, input?: Record<string, unknown>) => unknown;
}

declare global {
  interface Window {
    __SETFARM_TEST_BRIDGE__?: SetfarmTestBridge;
  }
}

/** Installs (or refreshes) the runtime test bridge on the global object. */
export function installTestBridge(options: SetfarmTestBridgeOptions): SetfarmTestBridge {
  const bridge: SetfarmTestBridge = {
    get states(): SetfarmTestBridgeStateSnapshot {
      return options.getStates();
    },
    invokeAction: (actionRef, input) => options.invokeAction(actionRef, input),
  };
  if (typeof window !== "undefined") {
    window.__SETFARM_TEST_BRIDGE__ = bridge;
  }
  return bridge;
}
