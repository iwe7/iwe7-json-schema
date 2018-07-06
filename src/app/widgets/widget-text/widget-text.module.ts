import { Iwe7WidgetsModule } from 'iwe7-widgets';
import { Observable, of } from 'rxjs';
import { NgModule, Injector } from '@angular/core';
import { CommonModule } from '@angular/common';
import { createCustomElement } from '@angular/elements';
import { WidgetTextRoutingModule } from './widget-text-routing.module';
import { WidgetTextComponent } from './widget-text.component';
@NgModule({
  imports: [
    CommonModule,
    WidgetTextRoutingModule,
    Iwe7WidgetsModule
  ],
  declarations: [WidgetTextComponent],
  entryComponents: [WidgetTextComponent],
  exports: [WidgetTextComponent]
})
export class WidgetTextModule {
  defined: Observable<any>;
  constructor(injector: Injector) {
    const ctrl = createCustomElement(WidgetTextComponent, { injector });
    if (!customElements.get('widget-text')) {
      customElements.define('widget-text', ctrl);
    }
    this.defined = of(customElements.whenDefined('widget-text'));
  }
}
