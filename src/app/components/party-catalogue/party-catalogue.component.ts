import {Component, OnInit} from '@angular/core';
import {PartyState} from '../../state/party.state';
import {Select} from '@ngxs/store';
import {Party} from '../../shared/models/party';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-party-catalogue',
  templateUrl: './party-catalogue.component.html',
  styleUrls: ['./party-catalogue.component.less']
})
export class PartyCatalogueComponent implements OnInit {
  @Select(PartyState)
  private parties$: Observable<Party[]>;

  public parties: Party[];

  constructor() {
  }

  ngOnInit() {
    this.parties$.subscribe((parties: Party[]) => {
      this.parties = parties;
    });
  }

}
