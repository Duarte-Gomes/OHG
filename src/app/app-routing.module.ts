import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { HomeComponent } from './home/home.component';
import { MissaoComponent } from './sobrenos/missao/missao.component';
import { OrgaosSociaisComponent } from './sobrenos/orgaos-sociais/orgaos-sociais.component';
import { PerguntasFrequentesComponent } from './sobrenos/perguntas-frequentes/perguntas-frequentes.component';
import { CorposSociaisComponent } from './sobrenos/corpos-sociais/corpos-sociais.component';
import { DonativosComponent } from './comoajudar/donativos/donativos.component';
import { SejaSocioComponent } from './comoajudar/seja-socio/seja-socio.component';
import { SejaVoluntarioComponent } from './comoajudar/seja-voluntario/seja-voluntario.component';
import { GatosRuaComponent } from './gatos-rua/gatos-rua.component';
import { AdopcoesComponent } from './adopcoes/adopcoes.component';
import { EncontreiGatoComponent } from './sos/encontrei-gato/encontrei-gato.component';
import { PerdiGatoComponent } from './sos/perdi-gato/perdi-gato.component';
import { GatoFeridoComponent } from './sos/gato-ferido/gato-ferido.component';
import { ContactosComponent } from './contactos/contactos.component';
import { BlogueComponent } from './blogue/blogue.component';
import { OnlineStoreComponent } from './online-store/online-store.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  { path: 'home', component: HomeComponent },
  { path: 'missao', component: MissaoComponent },
  { path: 'orgaos-sociais', component: OrgaosSociaisComponent },
  { path: 'perguntas-frequentes', component: PerguntasFrequentesComponent },
  { path: 'corpos-sociais', component: CorposSociaisComponent },
  { path: 'donativos', component: DonativosComponent },
  { path: 'seja-socio', component: SejaSocioComponent },
  { path: 'seja-voluntario', component: SejaVoluntarioComponent },
  { path: 'gatos-rua', component: GatosRuaComponent },
  { path: 'adopcoes', component: AdopcoesComponent },
  { path: 'encontrei-gato', component: EncontreiGatoComponent },
  { path: 'perdi-gato', component: PerdiGatoComponent },
  { path: 'gato-ferido', component: GatoFeridoComponent },
  { path: 'contactos', component: ContactosComponent },
  { path: 'blogue', component: BlogueComponent },
  { path: 'online-store', component: OnlineStoreComponent },


];

@NgModule({
  imports: [
    // RouterModule.forRoot(appRoutes, {useHash: true})
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]})
export class AppRoutingModule {

}
