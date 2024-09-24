import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
// import  { RenewCustComponent} from '../customer/RenewCustomer/renewCust.component'
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GetValueFromListPipe } from './pipe/index';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
      GetValueFromListPipe
   ],
    entryComponents: [
        

    ],
    schemas : [
      NO_ERRORS_SCHEMA,
      CUSTOM_ELEMENTS_SCHEMA
    ],
    exports: [
       GetValueFromListPipe
    ]
})
export class ShareModule { }