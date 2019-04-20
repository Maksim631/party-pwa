import {Component, OnInit} from '@angular/core';
import {TabService} from './shared/services/tab.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent implements OnInit {
  public selectedTab: number;

  constructor(private tabService: TabService) {

  }

  ngOnInit() {
    this.tabService.getActiveTab().subscribe(index => {
      this.selectedTab = index;
    });
  }
}
