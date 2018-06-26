import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { BindingComponent } from './binding/binding.component';
import { NestedComponent } from './binding/binding.nested.component';
import { StartComponent } from './binding/start/start.component';
import { IOModule } from './input-output/input-output.module';
import { ViewChildParentComponent } from './viewchild/viewchildparent.component';
import { ViewChildComponent } from './viewchild/viewchild.component';


@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    InvoiceComponent,
    BindingComponent,
    NestedComponent,
    StartComponent,
    ViewChildParentComponent,
    ViewChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    IOModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
