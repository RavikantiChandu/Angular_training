import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms'; // uses Obseravable
import { AppComponent } from './app.component';
import { GreetComponent } from './greet/greet.component';
import { InvoiceComponent } from './invoice/invoice.component';
import { BindingComponent } from './binding/binding.component';
import { NestedComponent } from './binding/binding.nested.component';
import { StartComponent } from './binding/start/start.component';
import { IOModule } from './input-output/input-output.module';
import { ViewChildParentComponent } from './viewchild/viewchildparent.component';
import { ViewChildComponent } from './viewchild/viewchild.component';
import { DIModule } from './di/di.module';
import { CompLifeCycleComponent, ChildComponent } from './complifecycle/complifecycle.component';
import { Service } from './dynamic/serviceLoader';
import { DynamicComponent} from './dynamic/dynamic.component';
import { ContactModule } from './multicomp/contact.module';
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { WeatherComponent } from './http/weather.component';
import { HttpComponent } from './http/http.component';
import { HttpService } from './http/http.service';


@NgModule({
  declarations: [
    AppComponent,
    GreetComponent,
    InvoiceComponent,
    BindingComponent,
    NestedComponent,
    StartComponent,
    ViewChildParentComponent,
    ViewChildComponent,
    CompLifeCycleComponent,
    ChildComponent,
    DynamicComponent,
    WeatherComponent,
    HttpComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    IOModule,
    DIModule,
    ContactModule,
    HttpClientModule,
    HttpModule,
    ReactiveFormsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [ Service, HttpService],
  bootstrap: [AppComponent],
  entryComponents:[DynamicComponent] // tells which Components should be allowed to inject dynamically
})
export class AppModule { }
