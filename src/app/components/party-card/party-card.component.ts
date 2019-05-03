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
  public party: Party;

  public title: string;
  public description: string;
  public enter: boolean;
  public date: Date;
  public price: number;
  public address: string;
  public category: Category;

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
    this.title = this.party.title;
    this.description = this.party.description;
    this.enter = this.party.enter;
    this.date = this.party.date;
    this.price = this.party.price;
    this.address = this.party.address;
    this.category = this.party.category;
  }

  deleteParty() {
    this.store.dispatch(new DeleteParty(this.party.id));
  }

  saveParty() {
    this.party = {
      id: this.party.id,
      title: this.title,
      description: this.description,
      enter: this.enter,
      date: this.date,
      price: this.price,
      address: this.address,
      category: this.category
    };
    this.store.dispatch(new ChangeParty(this.party));
    this.isChanging = !this.isChanging;
  }

  changeParty() {
    this.isChanging = !this.isChanging;
  }

  changeCategory(event: any) {
    this.category = this.categories.find((category: Category) => {
      return category.id === event;
    });
  }
}
