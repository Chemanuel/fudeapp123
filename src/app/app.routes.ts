import { RouterModule, Routes } from '@angular/router';
import { BodyhomeComponent } from './components/bodyhome/bodyhome.component';
import { FaqscreadoresComponent } from './components/faqscreadores/faqscreadores.component';
import { PrecioscreadoresComponent } from './components/precioscreadores/precioscreadores.component';
import { Rc1Component } from './components/rc1/rc1.component';
import { HomesociosComponent } from './components/homesocios/homesocios.component';
import { Rs1Component } from './components/rs1/rs1.component';



const APP_ROUTES: Routes = [
  { path: 'home', component: BodyhomeComponent },
  { path: 'PreguntasFrecuentes', component: FaqscreadoresComponent },
  { path: 'Precios', component: PrecioscreadoresComponent },
  { path: 'RegistroCreadores', component: Rc1Component},
  { path: 'Socios', component: HomesociosComponent},
  { path: 'RegistroSocios', component: Rs1Component },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }

];

export const APP_ROUTING = RouterModule.forRoot (APP_ROUTES);

