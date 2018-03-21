import {Component, Input} from '@angular/core';
import {ApiService} from "../../Services/api.service";
import { saveAs } from 'file-saver/FileSaver';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'files-bar',
  templateUrl: './filesbar.html',
  styleUrls: ['./filesbar.scss']
})

export class FilesBarComponent {
  @Input() file: any;
  @Input() torrentId: number;

  constructor(
    private apiService: ApiService,
  ) {}

  download(torrentId) {
    this.apiService.downloadFile(torrentId, this.file.id, this.file.name).subscribe(
      (blob) => {
        saveAs(blob, this.file.name);
      },
      (err) => this.apiService.handleError(err)
    );
  }

  getDownloadLink(torrentId) {
    return `${environment.api.base_url}/api/torrents/${this.torrentId}/download/${this.file.id}/${encodeURIComponent(this.file.name)}`;
  }
}
