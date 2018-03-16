import {AfterViewInit, Component, Input, ViewChild} from '@angular/core';
import {NgProgressComponent} from "@ngx-progressbar/core";

@Component({
  selector: 'torrent-bar',
  templateUrl: './torrentbar.html',
  styleUrls: ['./torrentbar.scss']
})

export class TorrentBarComponent implements AfterViewInit {
  @Input() torrent: any;
  @ViewChild(NgProgressComponent) progressBar: NgProgressComponent;

  ngAfterViewInit() {
    this.progressBar.start();
  }
}
