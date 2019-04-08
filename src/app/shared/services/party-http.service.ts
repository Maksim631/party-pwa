import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Party} from '../models/party';
import {environment} from '../../../environments/environment';

@Injectable()
export class PartyHttpService {
  private readonly url: string;

  constructor(private httpClientService: HttpClient) {
    this.url = environment.url;
  }

  public getParties() {
    return this.httpClientService.get(this.url + '/parties');
  }

  public updateParties(parties: Party[]) {
    return this.httpClientService.post(this.url + '/parties', parties);
  }

  public deleteParty(party: Party) {
    const params = new HttpParams().set('partyId', party.id.toString());
    return this.httpClientService.delete(this.url + '/party/', {params});
  }

  public updateParty(party: Party) {
    const params = new HttpParams().set('partyId', party.id.toString());
    return this.httpClientService.post(this.url + '/party/', party, {params});
  }

  public createParty(party: Party) {
    return this.httpClientService.put(this.url + '/party', party);
  }
}
