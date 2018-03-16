import {Component, OnInit} from '@angular/core';
import {ApiService} from "../../Services/api.service";
import {Torrent} from "../../Models/Torrent";
import {ToasterService} from "angular2-toaster";

@Component({
  selector: 'app-root',
  templateUrl: './torrent.component.html',
  styleUrls: ['./torrents.scss']
})

export class TorrentModuleComponent implements OnInit {
  torrents: Torrent[] = [];

  constructor(
    private apiService: ApiService,
    private toaster: ToasterService,
  ) {
    console.log('constructor torrent');
    console.log(this.toaster);
  }

  ngOnInit(): void {
    this.apiService.getTorrents().subscribe(
      (data) => {
        this.torrents = data;
      },
      (err) => this.apiService.handleError(err)
    );
  }

  popToast() {

  }
}
