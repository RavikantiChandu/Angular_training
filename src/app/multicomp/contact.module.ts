import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ContactDetailsComponent } from './contact/contactdetails.component';
import { ContactListComponent } from './contact/contactlist.component';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [ ContactDetailsComponent,
                    ContactListComponent
    ],
    exports:    [ ContactListComponent ]
})
export class ContactModule { }