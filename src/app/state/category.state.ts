import {Action, State, StateContext} from '@ngxs/store';
import _ from 'node_modules/lodash';
import {Category} from '../shared/models/category';
import {AddCategory, ChangeCategory, DeleteCategory} from '../actions/category.action';

@State<Category[]>({
  name: 'category',
  defaults: []
})
export class CategoryState {

  @Action(AddCategory)
  addCategory(ctx: StateContext<Category[]>, action: AddCategory) {
    ctx.setState((state) => [...state, action.category]);
  }

  @Action(DeleteCategory)
  deleteCategory(ctx: StateContext<Category[]>, action: DeleteCategory) {
    const state = [...ctx.getState()];
    _.remove(state, (category: Category) => {
      return category.id === action.categoryId;
    });
    ctx.setState(state);
  }

  @Action(ChangeCategory)
  changeCategory(ctx: StateContext<Category[]>, action: ChangeCategory) {
    const state = [...ctx.getState()];
    const index = _.findIndex(state, (category: Category) => {
      return category.id === action.category.id;
    });
    state[index] = action.category;
    ctx.setState(state);
  }
}
