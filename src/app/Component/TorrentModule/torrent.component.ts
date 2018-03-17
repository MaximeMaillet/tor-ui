import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../Services/api.service";
import {Torrent} from "../../Models/Torrent";
import {WebSocketService, MESSAGE} from "../../Services/websocket.service";

@Component({
  selector: 'app-root',
  templateUrl: './torrent.component.html',
  styleUrls: ['./torrents.scss']
})

export class TorrentModuleComponent implements OnInit {
  torrents: Torrent[] = [];

  constructor(
    private apiService: ApiService,
    private webSocketService: WebSocketService
  ) {
    webSocketService.on(MESSAGE.TORRENT_ADDED, (torrent) => {
      this.torrents.push(Object.assign(torrent, {id: 0}));
    });

    webSocketService.on(MESSAGE.TORRENT_UPDATE, (torrents) => {
      const arrayHash = torrents.map((torrent) => torrent.hash);
      // for(const i in this.torrents) {
      //   const index = arrayHash.indexOf(this.torrents[i].hash);
      //   console.log(this.torrents[i].name);
      //   if(this.torrents[i].finished && index !== -1) {
      //     console.log('finished');
      //     console.log(this.torrents[i]);
      //     this.torrents[i] = torrents[index];
      //   }
      // }
    });

    webSocketService.on(MESSAGE.TORRENT_UPDATED, (torrent) => {
      for(const i in this.torrents) {
        if(this.torrents[i].hash === torrent.hash) {
          if (!this.torrents[i].finished) {
            this.torrents[i].downloaded = torrent.downloaded;
            this.torrents[i].progress = torrent.progress;
          }

          this.torrents[i].uploaded = torrent.uploaded;
          this.torrents[i].ratio = torrent.ratio;
          this.torrents[i].active = torrent.active;
        }
      }
    });

    webSocketService.on(MESSAGE.TORRENT_FINISHED, (torrent) => {
      for(const i in this.torrents) {
        if(this.torrents[i].hash === torrent.hash) {
          this.torrents[i].finished = true;
        }
      }
    });
  }

  ngOnInit(): void {
    this.apiService.getTorrents().subscribe(
      (data) => {
        this.torrents = data;
      },
      (err) => this.apiService.handleError(err)
    );
  }

  dedupe(torrents) {
    console.log(torrents);
  }
}
