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

  constructor(
    private apiService: ApiService,
  ) {}

  download() {
    this.apiService.downloadFile(this.file.torrentId, this.file.id).subscribe(
      (blob) => {
        saveAs(blob, this.file.name);
      },
      (err) => this.apiService.handleError(err)
    );
  }
}
