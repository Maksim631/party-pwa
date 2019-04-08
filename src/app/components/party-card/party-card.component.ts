import {Component, OnInit} from '@angular/core';
import {PartyHttpService} from '../../shared/services/party-http.service';
import {Party} from '../../shared/models/party';
import {DomSanitizer} from '@angular/platform-browser';
import {MatIconRegistry} from '@angular/material';
import {Category} from '../../shared/models/category';

@Component({
  selector: 'app-party-card',
  templateUrl: './party-card.component.html',
  styleUrls: ['./party-card.component.less']
})
export class PartyCardComponent implements OnInit {
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

  constructor(private partyService: PartyHttpService,
              iconRegistry: MatIconRegistry,
              sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'dots',
      sanitizer.bypassSecurityTrustResourceUrl('assets/more.svg'));
  }

  ngOnInit() {
  }

}
