import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Membro } from '../shared/membro';

@Injectable({
  providedIn: 'root'
})
export class MembroDataService {

  private membroSource = new BehaviorSubject({ membro: null, key: '' });
  membro = this.membroSource.asObservable();

  constructor() { }

  changeContato(membro1: Membro, key1: string) {
    this.membroSource.next({ membro: membro1, key: key1 });
  }
}
