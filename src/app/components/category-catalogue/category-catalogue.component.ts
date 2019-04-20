import {Component, OnInit} from '@angular/core';
import {Select} from '@ngxs/store';
import {CategoryState} from '../../state/category.state';
import {Observable} from 'rxjs';
import {Category} from '../../shared/models/category';

@Component({
  selector: 'app-category-catalogue',
  templateUrl: './category-catalogue.component.html',
  styleUrls: ['./category-catalogue.component.less']
})
export class CategoryCatalogueComponent implements OnInit {
  @Select(CategoryState)
  private categories$: Observable<Category[]>;

  public categories: Category[];

  constructor() {
  }

  ngOnInit() {
    this.categories$.subscribe((categories: Category[]) => {
      this.categories = categories;
    });
  }

}
