import {Injectable} from '@angular/core';
import {fromEvent, Observable, ReplaySubject, Subject} from 'rxjs';
import {CategoryHttpService} from './category-http.service';
import {PartyHttpService} from './party-http.service';
import {PartyState} from '../../state/party.state';
import {Select} from '@ngxs/store';
import {Party} from '../models/party';
import {CategoryState} from '../../state/category.state';
import {Category} from '../models/category';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OnlineService {
  @Select(PartyState)
  private parties$: Observable<Party[]>;

  @Select(CategoryState)
  private categories$: Observable<Category[]>;

  private status$ = new ReplaySubject<boolean>(1);

  constructor(private categoryHttpService: CategoryHttpService,
              private partyHttpService: PartyHttpService,
              private httpClientService: HttpClient) {
    this.httpClientService.get(environment.url + '/connection').subscribe(
      () => {
        console.log('SUCCESS');
        this.status$.next(true);
      },
      () => {
        console.log('FAILED');
        this.status$.next(false);
      }
    );
    fromEvent(window, 'online').subscribe(() => {
        this.status$.next(true);
        this.parties$.subscribe((parties: Party[]) => {
          this.partyHttpService.updateParties(parties);
        });
        this.categories$.subscribe((categories: Category[]) => {
          this.categoryHttpService.updateCategories(categories);
        });
      }
    );
    fromEvent(window, 'offline').subscribe(() =>
      this.status$.next(false)
    );
  }

  getStatus(): Observable<boolean> {
    return this.status$.asObservable();
  }
}
