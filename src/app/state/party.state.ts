import {Action, State, StateContext} from '@ngxs/store';
import {Party} from '../shared/models/party';
import {AddParty, ChangeParty, DeleteParty} from '../actions/party.action';
import _ from 'node_modules/lodash';
import {Category} from '../shared/models/category';

@State<Party[]>({
  name: 'party',
  defaults: []
})
export class PartyState {
  @Action(AddParty)
  addParty(ctx: StateContext<Party[]>, action: AddParty) {
    ctx.getState().push(action.party);
  }

  @Action(DeleteParty)
  deleteParty(ctx: StateContext<Party[]>, action: DeleteParty) {
    const state = ctx.getState();
    ctx.setState(_.remove(state, (party: Party) => {
      return party.id !== action.partyId;
    }));
  }

  @Action(ChangeParty)
  changeParty(ctx: StateContext<Party[]>, action: ChangeParty) {
    const state = ctx.getState();
    const index = _.findIndex(state, (party: Party) => {
      return party.id === action.party.id;
    });
    state[index] = action.party;
    ctx.setState(state);
  }
}
