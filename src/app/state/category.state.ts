import {Action, State, StateContext} from '@ngxs/store';
import _ from 'node_modules/lodash';
import {Category} from '../shared/models/category';
import {AddCategory, ChangeCategory, DeleteCategory} from '../actions/category.action';
import {OnlineService} from '../shared/services/online.service';
import {CategoryHttpService} from '../shared/services/category-http.service';

@State<Category[]>({
  name: 'category',
  defaults: []
})
export class CategoryState {

  private isOnline: boolean;

  constructor(private onlineService: OnlineService,
              private categoryHttpService: CategoryHttpService) {
    this.onlineService.getStatus().subscribe(isOnline => {
      this.isOnline = isOnline;
    });
  }

  @Action(AddCategory)
  addCategory(ctx: StateContext<Category[]>, action: AddCategory) {
    if (this.isOnline && !action.fromServer) {
      this.categoryHttpService.createCategory(action.category).subscribe(() => {
        this.categoryHttpService.getCategories().subscribe((categories: Category[]) => {
          ctx.setState(categories);
        });
      });
    } else {
      const state = ctx.getState();
      state.push(action.category);
      ctx.setState(state);
    }
  }

  @Action(DeleteCategory)
  deleteCategory(ctx: StateContext<Category[]>, action: DeleteCategory) {
    const state = ctx.getState();
    ctx.setState(_.remove(state, (category: Category) => {
      return category.id !== action.categoryId;
    }));
  }

  @Action(ChangeCategory)
  changeCategory(ctx: StateContext<Category[]>, action: ChangeCategory) {
    const state = ctx.getState();
    const index = _.findIndex(state, (category: Category) => {
      return category.id === action.category.id;
    });
    state[index] = action.category;
    ctx.setState(state);
  }
}
