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
  addCategory(ctx: StateContext<Category[]>, action: Category) {
    const state = ctx.getState();
    state.push(action);
    ctx.setState(state);
  }

  @Action(DeleteCategory)
  deleteCategory(ctx: StateContext<Category[]>, action: number) {
    const state = ctx.getState();
    ctx.setState(_.remove(state, (category: Category) => {
      return category.id === action;
    }));
  }

  @Action(ChangeCategory)
  changeCategory(ctx: StateContext<Category[]>, action: Category) {
    let state = ctx.getState();
    state = _.remove(state, (category: Category) => {
      return category.id === action.id;
    });
    state.push(action);
    ctx.setState(state);
  }
}
