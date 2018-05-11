import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyBhE9Wjsg7rxbJIxVrTpdq10FdS_I7eW6o',
  authDomain: 'fudefafa-191420.firebaseapp.com',
  databaseURL: 'https://fudefafa-191420.firebaseio.com',
  storageBucket: 'fudefafa-191420.appspot.com',
  messagingSenderId: '813026987388'
};

// servicios
import { FaqscService } from './servicios/faqscreadores.service';
import { EnviarbrandService } from './servicios/enviarbrand.service';


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
import { Enviarmarca } from './interface/enviarmarca.interface';
import { CreadoresComponent } from './components/creadores/creadores.component';
import { SociosComponent } from './components/socios/socios.component';
import { TiendamuestraComponent } from './components/tiendamuestra/tiendamuestra/tiendamuestra.component';





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
    CreadoresComponent,
    SociosComponent,
    TiendamuestraComponent

  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [
    EnviarbrandService,
    FaqscService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
