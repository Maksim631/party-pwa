import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PartyHttpService} from './services/party-http.service';
import {HttpClientModule} from '@angular/common/http';
import {CategoryHttpService} from './services/category-http.service';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule
  ],
  exports: [
    HttpClientModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [
    PartyHttpService,
    CategoryHttpService
  ]
})
export class SharedModule {
}
