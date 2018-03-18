import {Injectable} from '@angular/core';
import {AuthService} from "../Guards/AuthService";
import * as io from 'socket.io-client';
import {environment} from '../../environments/environment';

@Injectable()
export class WebSocketService {
  base_url = environment.websocket.base_url;

  private socket;

  constructor(
    private authService: AuthService
  ) {

  }

  connect() {
    if(!this.socket) {
      this.socket = io(this.base_url);

      this.socket.on(MESSAGE.USER_CONNECT, (data) => {
        console.log(data);
        this.socket.emit(MESSAGE.USER_CONNECT, this.authService.getToken());
      })
    }

    return this.socket;
  }

  on(message, callback) {
    this.connect().on(message, (data) => callback(JSON.parse(data)));
  }
}

export const MESSAGE = {
  TORRENT_ADDED: 'tr.added',
  TORRENT_REMOVED: 'tr.removed',
  TORRENT_UPDATED: 'tr.updated',
  TORRENT_PAUSED: 'tr.paused',
  TORRENT_RESUMED: 'tr.resumed',
  TORRENT_FINISHED: 'tr.finished',
  TORRENT_UPDATE: 'tr.bdd.update',
  USER_CONNECT: 'us.connect',
};