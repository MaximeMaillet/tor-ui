import {Component, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {ApiService} from "../../../Services/api.service";

@Component({
  selector: 'torrent-add-modal',
  templateUrl: './content.html',
  styleUrls: ['./style.scss'],
})

export class TorrentAddModal {
  @ViewChild("torrentAddModal") private engineModal: TemplateRef<any>;
  private modal: NgbModalRef;
  fileToUpload: File = null;

  constructor(
    private api: ApiService,
    private modalService: NgbModal
  ) {}

  async open() {
    this.modal = await this.modalService.open(this.engineModal);
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    const formData: FormData = new FormData();
    formData.append('torrents', this.fileToUpload, this.fileToUpload.name);
    this.api.addTorrent(formData).subscribe(
      (data) => {
        console.log(data);
      },
      (err) => this.api.handleError(err)
    );
  }
}
