import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Membro } from '../shared/membro';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MembroService {

  constructor(private db: AngularFireDatabase) { }

  insert(membro: Membro) {
    this.db.list('membro').push(membro)
      .then((result: any) => {
        console.log(result.key);
      });
  }

  update(membro: Membro, key: string) {
    this.db.list('membro').update(key, membro)
      .catch((error: any) => {
        console.error(error);
      });
  }

  getAll() {
    return this.db.list('membro')
      .snapshotChanges()
      .pipe(
        map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        })
      );
  }

  delete(key: string) {
    this.db.object(`membro/${key}`).remove();
  }

}
