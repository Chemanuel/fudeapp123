import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

// rutas
import { APP_ROUTING } from './app.routes';

// componentes
import { AppComponent } from './app.component';
import { NavbarhomeComponent } from './components/navbarhome/navbarhome.component';
import { BodyhomeComponent } from './components/bodyhome/bodyhome.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { FaqscreadoresComponent } from './components/faqscreadores/faqscreadores.component';
import { PrecioscreadoresComponent } from './components/precioscreadores/precioscreadores.component';
import { Rc1Component } from './components/rc1/rc1.component';
import { HomesociosComponent } from './components/homesocios/homesocios.component';
import { Rs1Component } from './components/rs1/rs1.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarhomeComponent,
    BodyhomeComponent,
    FooterComponent,
    FaqscreadoresComponent,
    PrecioscreadoresComponent,
    Rc1Component,
    HomesociosComponent,
    Rs1Component,

  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
