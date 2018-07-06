import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'widget-text',
                loadChildren: './widget-text.module#WidgetTextModule'
            }
        ])
    ],
    exports: [],
    declarations: [],
    providers: [],
})
export class WidgetTextLazyModule { }
