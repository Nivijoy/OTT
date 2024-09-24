import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToasterService, Toast, BodyOutputType } from 'angular2-toaster';
import { RoleService, PagerService, PackService } from '../../_service/index';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import * as JSXLSX from 'xlsx';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
const EXCEL_EXTENSION = '.xlsx';

import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { UpsertOttplaycodesComponent } from '../upsert-ottplaycodes/upsert-ottplaycodes.component';
@Component({
  selector: 'ngx-list-ottplaycodes',
  templateUrl: './list-ottplaycodes.component.html',
  styleUrls: ['./list-ottplaycodes.component.scss']
})
export class ListOttplaycodesComponent implements OnInit {
  submit: boolean = false; ottdata; total; bus; bus_name; config; search; group1; group_name;
  pager: any = {}; page: number = 1; pagedItems: any = []; limit: number = 25; ottplan_code; ottplandata; ottplan_name; ottplanname;
  status = ''; taxtype = ''; days = ''; ott_vendor = '';
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public primaryColour = '#dd0031';
  public secondaryColour = '#006ddd';
  public loading = false;
  validityType = [
    { id: 0, label: 'Disable' },
    { id: 1, label: 'Date' },
    { id: 2, label: 'Day' },
    { id: 3, label: 'Month' }
  ]
  constructor(
    public role: RoleService,
    public pageservice: PagerService,
    private nasmodel: NgbModal,
    private pack: PackService,

  ) { }

  async ngOnInit() {
    localStorage.removeItem('Array');
    await this.initiallist();
  }





  async initiallist() {
    this.loading = true;
    let result = await this.pack.listOttPlayCode(
      {
        index: (this.page - 1) * this.limit,
        limit: this.limit,
      })
    if (result) {
      this.loading = false;
      this.ottdata = result[0];
      this.total = result[1]["count"];
      this.setPage();
    }
  }

  getlist(page) {
    var total = Math.ceil(this.total / this.limit);
    let result = this.pageservice.pageValidator(this.page, page, total);
    this.page = result['value'];
    if (result['result']) {
      this.initiallist();
    }
  }

  setPage() {
    this.pager = this.pageservice.getPager(this.total, this.page, this.limit);
    this.pagedItems = this.ottdata;
  }

  upsertOttPlayCode(editdata :undefined) {
    const activeModal = this.nasmodel.open(UpsertOttplaycodesComponent, { size: 'lg', container: 'nb-layout' });
    activeModal.componentInstance.modalHeader = 'Add OTT Play Coupon Code';
    if(editdata) activeModal.componentInstance.editdata=editdata;
    activeModal.result.then((data) => {
      this.initiallist();
    });
  }






}
