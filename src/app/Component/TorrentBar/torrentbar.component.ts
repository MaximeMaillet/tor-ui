import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {NgProgress} from "@ngx-progressbar/core";
import {ApiService} from "../../Services/api.service";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

@Component({
  selector: 'torrent-bar',
  templateUrl: './torrentbar.html',
  styleUrls: ['./torrentbar.scss']
})

export class TorrentBarComponent implements AfterViewInit {
  @Input() torrent: any;

  constructor(
    private progress: NgProgress,
    private apiService: ApiService,
  ) {}


  ngAfterViewInit() {
    this.progress.start();

    setTimeout(() => {
      this.progress.complete();
    }, 2000);
  }

  details() {
    console.log('get details');
  }

  play() {

  }

  pause() {

  }

  download() {

  }

  remove() {

  }
}
