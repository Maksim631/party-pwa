import {Component, Input, OnInit} from '@angular/core';
import {Store} from '@ngxs/store';
import {Category} from '../../shared/models/category';
import {ChangeCategory, DeleteCategory} from '../../actions/category.action';

@Component({
  selector: 'app-category-card',
  templateUrl: './category-card.component.html',
  styleUrls: ['./category-card.component.less']
})
export class CategoryCardComponent implements OnInit {

  @Input()
  public category: Category;


  message: string;
  public isChanging = false;

  constructor(private store: Store) {
  }

  ngOnInit() {
  }

  deleteCategory() {
    this.store.dispatch(new DeleteCategory(this.category.id));
  }

  saveCategory() {
    this.store.dispatch(new ChangeCategory(this.category));
    this.isChanging = !this.isChanging;
  }

  changeCategory() {
    this.isChanging = !this.isChanging;
  }

}
