
import { Socket, io } from 'socket.io-client'

export interface ConnectSocket {
  url?: string;
}

export async function connectSocket(params: ConnectSocket): Promise<Socket> {

  const url = params.url || 'wss://arcade.21e8.tech'

  const socket: Socket = io(url)

  socket.on("connect", () => {
    console.log('arcade.socket.on.connect', { socket_id: socket.id });
  });

  socket.on("disconnect", () => {
    console.log('arcade.socket.on.disconnect');
  });

  socket.onAny((eventName, ...args) => {
    console.log(`arcade.socket.events.on.${eventName}`, args);
  })

  return socket

}

export interface PlayGame {

}

export async function playGame(params: PlayGame) {

}

