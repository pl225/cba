import { Injectable } from '@angular/core';
import { AngularFireStorage, AngularFireStorageReference, AngularFireUploadTask } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FotoService {

  downloadURL: Observable<string>;

  constructor(private afStorage: AngularFireStorage) {}

  upload(foto: any) {
    const file = foto;
    const filePath = 'name-your-file-path-here';
    const fileRef = this.afStorage.ref(filePath);
    const task = this.afStorage.upload(filePath, file);

    // observe percentage changes
    const uploadPercent = task.percentageChanges();
    // get notified when the download URL is available
    task.snapshotChanges().pipe(
        finalize(() => this.downloadURL = fileRef.getDownloadURL().subscribe(x => console.log(x)) )
     )
    .subscribe();

  }
}
