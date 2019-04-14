import {Party} from '../shared/models/party';

export class AddParty {
  static readonly type = '[Party] Add new';

  constructor(public party: Party) {
  }
}


export class DeleteParty {
  static readonly type = '[Party] Delete';

  constructor(public partyId: number) {
  }
}


export class ChangeParty {
  static readonly type = '[Party] Change party';

  constructor(public party: Party) {
  }
}








