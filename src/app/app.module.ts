import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AcumuladorComponent } from './acumulador/acumulador.component';

import { AppComponent } from './app.component';
import { HeroesModule } from './heroe/heroe.module';

@NgModule({
  declarations: [
    AppComponent,
    AcumuladorComponent
  ],
  imports: [
    BrowserModule, HeroesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
