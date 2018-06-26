import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StockComponent } from './inputbinding';
import { OrderComponent } from './order.component';
import { SMSComponent } from './sms.component';
import { TimerComponent } from './timer.component';
import { FormsModule } from '@angular/forms';

import { PriceQuoterComponent,
         OutputComponent,
         MailComponent } from './outputbinding';

@NgModule({
    imports: [ CommonModule, FormsModule ],
    declarations: [
        StockComponent,
        OrderComponent,
        SMSComponent,
        TimerComponent,
        PriceQuoterComponent,
        OutputComponent,
        MailComponent
     ],
    exports:    [ StockComponent,
                  OutputComponent
                ]
})
export class IOModule {}
