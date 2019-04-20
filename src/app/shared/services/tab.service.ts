import {Injectable} from '@angular/core';
import {Observable, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TabService {
  private activeTab = new Subject<number>();

  constructor() {
  }

  public getActiveTab(): Observable<number> {
    return this.activeTab.asObservable();
  }

  public setActiveTab(index: number): void {
    this.activeTab.next(index);
  }
}
