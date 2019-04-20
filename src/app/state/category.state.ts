import {Action, State, StateContext} from '@ngxs/store';
import _ from 'node_modules/lodash';
import {Category} from '../shared/models/category';
import {AddCategory, ChangeCategory, DeleteCategory} from '../actions/category.action';

@State<Category[]>({
  name: 'category',
  defaults: [{id: 1, title: '1'}, {id: 2, title: '2'}]
})
export class CategoryState {
  @Action(AddCategory)
  addCategory(ctx: StateContext<Category[]>, action: AddCategory) {
    const state = ctx.getState();
    state.push(action.category);
    ctx.setState(state);
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
