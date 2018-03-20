import {Component, Input} from '@angular/core';
import {ApiService} from "../../Services/api.service";
import { saveAs } from 'file-saver/FileSaver';

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
}
