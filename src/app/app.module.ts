import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ButtonGroupModule } from '../../projects/button-group/src/lib/button-group.module';

import { AppComponent } from './app.component';

@NgModule({

    declarations: [

        AppComponent

    ],

    imports: [

        BrowserModule,
        ButtonGroupModule

    ],

    providers: [],
    bootstrap: [ AppComponent ]

})
export class AppModule {
}
