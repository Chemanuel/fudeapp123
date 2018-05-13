import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';

// servicios
import { FirebaseService } from './services/firebase.service';
import { FaqscService } from './servicios/faqscreadores.service';
import { EnviarbrandService } from './servicios/enviarbrand.service';

// rutas
import { APP_ROUTING } from './app.routes';

// componentes
import { AppComponent } from './app.component';
import { NavbarhomeComponent } from './components/navbarhome/navbarhome.component';
import { BodyhomeComponent } from './components/bodyhome/bodyhome.component';

// Marcas
import { RegistroComponent as RegistroMarcaComponent } from './components/marcas/registro/registro.component';

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
import { RegistroComponent } from './components/marcas/registro/registro.component';

const firebase = {
  apiKey: 'AIzaSyBhE9Wjsg7rxbJIxVrTpdq10FdS_I7eW6o'
  , authDomain: 'fudefafa-191420.firebaseapp.com'
  , databaseURL: 'https://fudefafa-191420.firebaseio.com'
  , storageBucket: 'fudefafa-191420.appspot.com'
  , messagingSenderId: '813026987388'
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarhomeComponent,
    BodyhomeComponent
    , RegistroMarcaComponent
    , FooterComponent,
    FaqscreadoresComponent,
    PrecioscreadoresComponent,
    Rc1Component,
    HomesociosComponent,
    Rs1Component,
    CreadoresComponent,
    SociosComponent,
    TiendamuestraComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    HttpModule
    , AngularFireModule.initializeApp(firebase)
    , AngularFireAuthModule
    , FormsModule
    , ReactiveFormsModule
  ],
  providers: [
    EnviarbrandService
    , FaqscService
    , FirebaseService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
