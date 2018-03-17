import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../Services/api.service";
import {Torrent} from "../../Models/Torrent";

@Component({
  selector: 'app-root',
  templateUrl: './torrent.component.html',
  styleUrls: ['./torrents.scss']
})

export class TorrentModuleComponent implements OnInit {
  torrents: Torrent[] = [];

  constructor(
    private apiService: ApiService,
  ) {}

  ngOnInit(): void {
    this.apiService.getTorrents().subscribe(
      (data) => {
        this.torrents = data;
      },
      (err) => this.apiService.handleError(err)
    );
  }
}
