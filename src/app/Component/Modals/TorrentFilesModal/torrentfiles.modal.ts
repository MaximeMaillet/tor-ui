import {Component, TemplateRef, ViewChild} from '@angular/core';
import {Router} from "@angular/router";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {FormGroup} from "@angular/forms";
import {ApiService} from "../../../Services/api.service";

@Component({
  selector: 'torrent-files-modal',
  templateUrl: './content.html',
  styleUrls: ['./style.scss'],
})

export class TorrentFilesModal {
  @ViewChild("torrentFilesModal") private engineModal: TemplateRef<any>;

  private modal: NgbModalRef;

  public files: any[];
  private torrentId: number;

  constructor(
    private router: Router,
    private api: ApiService,
    private modalService: NgbModal
  ) {}

  async open(torrentId, files) {
    this.files = files;
    this.torrentId = torrentId;
    this.modal = await this.modalService.open(this.engineModal);
  }
}
