import {Component, OnInit} from '@angular/core';
import {TabService} from '../../shared/services/tab.service';
import {Store} from '@ngxs/store';
import {AddParty} from '../../actions/party.action';
import {IdGeneratorService} from '../../shared/services/id-generator.service';
import {MatDialog} from '@angular/material';
import {CreatePartyComponent} from '../create-party/create-party.component';
import {CreateCategoryComponent} from '../create-category/create-category.component';
import {AddCategory} from '../../actions/category.action';

@Component({
  selector: 'app-create-button',
  templateUrl: './create-button.component.html',
  styleUrls: ['./create-button.component.less']
})
export class CreateButtonComponent implements OnInit {

  constructor(private tabService: TabService,
              private store: Store,
              private idGenerator: IdGeneratorService,
              private dialog: MatDialog) {
  }

  ngOnInit() {
  }

  public createParty() {
    this.tabService.setActiveTab(0);
    const dialogRef = this.dialog.open(CreatePartyComponent, {
      width: '50%',
      data: {date: new Date(), category: {}}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(new AddParty(result));
      }
    });
  }


  public createCategory() {
    this.tabService.setActiveTab(1);
    const dialogRef = this.dialog.open(CreateCategoryComponent, {
      width: 'auto',
      data: {}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.store.dispatch(new AddCategory(result));
      }
    });
  }
}
