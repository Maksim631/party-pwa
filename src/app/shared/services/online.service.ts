import {Injectable} from '@angular/core';
import {combineLatest, fromEvent, Observable, ReplaySubject} from 'rxjs';
import {CategoryHttpService} from './category-http.service';
import {PartyHttpService} from './party-http.service';
import {PartyState} from '../../state/party.state';
import {Actions, ofActionCompleted, Select} from '@ngxs/store';
import {Party} from '../models/party';
import {CategoryState} from '../../state/category.state';
import {Category} from '../models/category';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {first} from 'rxjs/operators';
import {AddCategory, ChangeCategory, DeleteCategory} from '../../actions/category.action';
import {AddParty, ChangeParty, DeleteParty} from '../../actions/party.action';

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
              private httpClientService: HttpClient,
              private actions$: Actions) {
    this.httpClientService.get(environment.url + '/connection').subscribe(
      () => {
        this.status$.next(true);
      },
      () => {
        this.status$.next(false);
      }
    );
    fromEvent(window, 'online').subscribe(() => {
        this.status$.next(true);
      }
    );
    fromEvent(window, 'offline').subscribe(() =>
      this.status$.next(false)
    );
    this.setActionListeners();
  }

  getStatus(): Observable<boolean> {
    return this.status$.asObservable();
  }

  private setActionListeners() {
    this.actions$.pipe(ofActionCompleted(AddCategory, DeleteCategory, ChangeCategory)).subscribe((action) => {
      if (!action.action.fromServer) {
        this.getStatus().subscribe(status => {
          if (status) {
            this.updateCategoryServerData();
          }
        }).unsubscribe();
      }
    });
    this.actions$.pipe(ofActionCompleted(AddParty, DeleteParty, ChangeParty)).subscribe((action) => {
      if (!action.action.fromServer) {
        this.getStatus().subscribe(status => {
          if (status) {
            this.updatePartyServerData();
          }
        }).unsubscribe();
      }
    });
  }

  private updateCategoryServerData() {
    this.categories$.subscribe((categories: Category[]) => {
      this.categoryHttpService.updateCategories(categories).pipe(first()).subscribe(() => {
      });
    }).unsubscribe();
  }

  private updatePartyServerData() {
    this.parties$.subscribe((parties: Party[]) => {
      this.partyHttpService.updateParties(parties).pipe(first()).subscribe(() => {
      });
    }).unsubscribe();
  }
}
