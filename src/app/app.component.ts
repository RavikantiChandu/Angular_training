import { Component, Inject, ViewContainerRef } from '@angular/core';
import { Service } from './dynamic/serviceLoader';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Angular 5 SPA ';

  constructor(@Inject(Service) service,
  @Inject(ViewContainerRef) viewContainerRef) {

    service.setRootViewContainerRef(viewContainerRef)
    service.addDynamicComponent( )

  }
}

