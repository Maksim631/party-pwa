import {Component, enableProdMode, OnInit} from '@angular/core';
import {TabService} from './shared/services/tab.service';
import {PartyHttpService} from './shared/services/party-http.service';
import {CategoryHttpService} from './shared/services/category-http.service';
import {Store} from '@ngxs/store';
import {Party} from './shared/models/party';
import {AddParty} from './actions/party.action';
import {Category} from './shared/models/category';
import {AddCategory} from './actions/category.action';
import {OnlineService} from './shared/services/online.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public selectedTab: number;

  constructor(private tabService: TabService,
              private partyHttpService: PartyHttpService,
              private categoryHttpService: CategoryHttpService,
              private store: Store) {

  }

  ngOnInit() {
    this.tabService.getActiveTab().subscribe(index => {
      this.selectedTab = index;
    });

    this.partyHttpService.getParties().subscribe((parties: Party[]) => {
      parties.forEach(party => {
        this.store.dispatch(new AddParty(party));
      });
    });
    this.categoryHttpService.getCategories().subscribe((categories: Category[]) => {
      console.log(categories);
      categories.forEach(category => {
        this.store.dispatch(new AddCategory(category, true));
      });
    });

  }
}
