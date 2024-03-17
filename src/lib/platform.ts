export const isClient = globalThis.window !== undefined;
export const isServer = globalThis.window === undefined;
