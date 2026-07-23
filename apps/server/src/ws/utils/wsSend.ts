import type { AuthWebSocket } from "../types/ws.types.js";
import type { ServerResponse } from "@common/contracts";

export const wsSend = (socket: AuthWebSocket, payload: ServerResponse) => {
  return socket.send(JSON.stringify(payload));
};
