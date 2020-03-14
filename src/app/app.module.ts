import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
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

@NgModule({
  declarations: [
	  AppComponent,
	  HeaderComponent,
	  HomeComponent,
	  MissaoComponent,
	  OrgaosSociaisComponent,
	  PerguntasFrequentesComponent,
	  CorposSociaisComponent,
	  DonativosComponent,
	  SejaSocioComponent,
	  SejaVoluntarioComponent,
	  GatosRuaComponent,
	  AdopcoesComponent,
	  EncontreiGatoComponent,
	  PerdiGatoComponent,
	  GatoFeridoComponent,
	  ContactosComponent,
	  BlogueComponent,
	  OnlineStoreComponent
	],
	imports: [
	NgbModule,
	BrowserModule,
	FormsModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
