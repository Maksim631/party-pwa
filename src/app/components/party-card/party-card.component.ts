import {Component, Input, OnInit} from '@angular/core';
import {Party} from '../../shared/models/party';
import {Select, Store} from '@ngxs/store';
import {ChangeParty, DeleteParty} from '../../actions/party.action';
import {CategoryState} from '../../state/category.state';
import {Category} from '../../shared/models/category';
import {Observable} from 'rxjs';
import {MatOptionSelectionChange} from '@angular/material/typings/core';

@Component({
  selector: 'app-party-card',
  templateUrl: './party-card.component.html',
  styleUrls: ['./party-card.component.less']
})
export class PartyCardComponent implements OnInit {
  @Input()
  public party: Party = {
    id: 1,
    title: 'title',
    description: 'fjiogjdkgdfg',
    enter: true,
    date: new Date,
    price: 123,
    address: 'addwdew',
    category: {
      id: 2,
      title: 'category'
    }
  };

  @Select(CategoryState)
  private categories$: Observable<Category[]>;

  public categories: Category[];

  public isChanging = false;

  constructor(private store: Store) {
  }

  ngOnInit() {
    this.categories$.subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }

  deleteParty() {
    this.store.dispatch(new DeleteParty(this.party.id));
  }

  saveParty() {
    this.store.dispatch(new ChangeParty(this.party));
    this.isChanging = !this.isChanging;
  }

  changeParty() {
    this.isChanging = !this.isChanging;
  }

  changeCategory(event: MatOptionSelectionChange) {
    this.party.category = this.categories.find((category: Category) => {
      return category.title === event.source.viewValue;
    });
  }
}
