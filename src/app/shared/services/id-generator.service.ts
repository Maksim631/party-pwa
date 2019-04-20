import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class IdGeneratorService {
  private nextId = 3;

  constructor() {
  }

  public getNextId() {
    return this.nextId++;
  }
}
