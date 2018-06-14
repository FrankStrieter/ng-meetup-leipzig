import { NgModule, Injector } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { MatToolbarModule } from '@angular/material';
import { createCustomElement } from '@angular/elements';

@NgModule({
  imports: [MatToolbarModule],
  declarations: [HeaderComponent],
  entryComponents: [HeaderComponent],
})
export class CommonComponentsModule {
  constructor(injector: Injector) {
    // don´t forget to pass the Component to entryComponents
    const customElement = createCustomElement(HeaderComponent, {
      injector,
    });
    customElements.define('lem-header', customElement);
  }
  ngDoBootstrap() {}
}
