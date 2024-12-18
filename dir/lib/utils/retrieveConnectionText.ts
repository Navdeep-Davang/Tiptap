import { WebSocketStatus } from '@hocuspocus/provider'

export const retrieveConnectionText = (collabState: WebSocketStatus) => {
  switch (collabState) {
    case WebSocketStatus.Connected:
      return `Connected`

    case WebSocketStatus.Connecting:
      return `Connecting...`

    case WebSocketStatus.Disconnected:
      return `Disconnected`

    default:
      return `Connecting...`
  }
}
