import {Component, Input, OnInit} from '@angular/core';
import {NgProgress} from "@ngx-progressbar/core";
import {ApiService} from "../../Services/api.service";
import {AuthService} from "../../Guards/AuthService";

@Component({
  selector: 'torrent-bar',
  templateUrl: './torrentbar.html',
  styleUrls: ['./torrentbar.scss']
})

export class TorrentBarComponent implements OnInit {
  @Input() torrent: any;

  public currentUser;

  constructor(
    private progress: NgProgress,
    private apiService: ApiService,
    private authService: AuthService,
  ) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getUser();
  }

  details() {
    console.log('get details');
  }

  play() {
    this.apiService.playTorrent(this.torrent.id).subscribe(
      (data) => {
        console.log('play');
      },
      (err) => this.apiService.handleError(err)
    );
  }

  pause() {
    this.apiService.pauseTorrent(this.torrent.id).subscribe(
      (data) => {
        console.log('pause');
      },
      (err) => this.apiService.handleError(err)
    );
  }

  remove() {
    this.apiService.removeTorrent(this.torrent.id).subscribe(
      (data) => {
        console.log('remove');
      },
      (err) => this.apiService.handleError(err)
    );
  }
}
