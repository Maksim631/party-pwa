import {Action, State, StateContext} from '@ngxs/store';
import {Party} from '../shared/models/party';
import {AddParty, ChangeParty, DeleteParty} from '../actions/party.action';
import _ from 'node_modules/lodash';

@State<Party[]>({
  name: 'party',
  defaults: []
})
export class PartyState {
  @Action(AddParty)
  addParty(ctx: StateContext<Party[]>, action: Party) {
    ctx.patchState([action]);
  }

  @Action(DeleteParty)
  deleteParty(ctx: StateContext<Party[]>, action: number) {
    const state = ctx.getState();
    ctx.setState(_.remove(state, (party: Party) => {
      return party.id === action;
    }));
  }

  @Action(ChangeParty)
  changeParty(ctx: StateContext<Party[]>, action: Party) {
    let state = ctx.getState();
    state = _.remove(state, (party: Party) => {
      return party.id === action.id;
    });
    state.push(action);
    ctx.setState(state);
  }
}
