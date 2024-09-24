import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { PackService } from '../../_service';


@Component({
  selector: 'ngx-upsert-ottplaycodes',
  templateUrl: './upsert-ottplaycodes.component.html',
  styleUrls: ['./upsert-ottplaycodes.component.scss']
})
export class UpsertOttplaycodesComponent implements OnInit {
  form!: FormGroup;
  editdata;
  validityType = [
    { id: 0, label: 'Disable' },
    { id: 1, label: 'Date' },
    { id: 2, label: 'Day' },
    { id: 3, label: 'Month' }
  ]
  constructor(
    public activeModal: NgbActiveModal,
    private packService: PackService

  ) { }

  ngOnInit() {
    this.createForm()
  }

  createForm() {
    this.form = new FormGroup({
      couponcode: new FormControl(this.editdata && this.editdata.couponcode || '', Validators.required),
      ottplatform: new FormControl(this.editdata && this.editdata.ottplatform || '', Validators.required),
      validity_type: new FormControl(this.editdata && this.editdata.validity_type || '', Validators.required),
      vunit: new FormControl(this.editdata && this.editdata.vunit || '', Validators.required)
    })
  }
  async submit() {
    let method = 'addOttPlayCode'
    if (this.editdata) {
      method = 'updateOttPlayCode'
      this.form.value['ccid'] = this.editdata['ccid']
    }

    let result = await this.packService[method](this.form.value)
    console.log(result)
    if (result[0]['error_msg'] == 0) {
      this.activeModal.close(true)

    }
  }
  cancel() {
    this.activeModal.close(true)
  }

}
