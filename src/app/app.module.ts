import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { PartyCardComponent } from './components/party-card/party-card.component';
import {SharedModule} from './shared/shared.module';
import {NgxsModule} from '@ngxs/store';
import {NgxsReduxDevtoolsPluginModule} from '@ngxs/devtools-plugin';
import {CategoryState} from './state/category.state';
import {PartyState} from './state/party.state';
import { CategoryCardComponent } from './components/category-card/category-card.component';
import { PartyCatalogueComponent } from './components/party-catalogue/party-catalogue.component';
import { CategoryCatalogueComponent } from './components/category-catalogue/category-catalogue.component';
import { CreateButtonComponent } from './components/create-button/create-button.component';
import { CreatePartyComponent } from './components/create-party/create-party.component';
import { CreateCategoryComponent } from './components/create-category/create-category.component';

@NgModule({
  declarations: [
    AppComponent,
    PartyCardComponent,
    CategoryCardComponent,
    PartyCatalogueComponent,
    CategoryCatalogueComponent,
    CreateButtonComponent,
    CreatePartyComponent,
    CreateCategoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    NgxsModule.forRoot([
      CategoryState,
      PartyState
    ]),
    NgxsReduxDevtoolsPluginModule.forRoot(),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
