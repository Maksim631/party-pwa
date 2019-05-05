import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PartyHttpService} from './services/party-http.service';
import {HttpClientModule} from '@angular/common/http';
import {CategoryHttpService} from './services/category-http.service';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule, MatInputModule, MatNativeDateModule} from '@angular/material';
import {FormsModule} from '@angular/forms';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatTabsModule} from '@angular/material/tabs';
import {TabService} from './services/tab.service';
import {IdGeneratorService} from './services/id-generator.service';
import {MatDialogModule} from '@angular/material/dialog';
import {CreatePartyComponent} from '../components/create-party/create-party.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {CreateCategoryComponent} from '../components/create-category/create-category.component';
import {OnlineService} from './services/online.service';
import {TranslatePipe} from './translate/translate.pipe';



@NgModule({
  declarations: [
    TranslatePipe
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatNativeDateModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatToolbarModule
  ],
  exports: [
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    MatMenuModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    FormsModule,
    MatCheckboxModule,
    MatButtonModule,
    MatTabsModule,
    MatDialogModule,
    MatToolbarModule,
    TranslatePipe
  ],
  providers: [
    PartyHttpService,
    CategoryHttpService,
    TabService,
    IdGeneratorService,
    OnlineService,
    MatNativeDateModule
  ],
  entryComponents: [
    CreatePartyComponent,
    CreateCategoryComponent
  ]
})
export class SharedModule {
}
