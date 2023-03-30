import { Injector, NgModule } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})

export class AppModule {

  constructor(private _injector: Injector) { }

  ngDoBootstrap(): void {
    const element = createCustomElement(AppComponent, { injector: this._injector });
    customElements.define('app-angular-elements', element);
  }
}
