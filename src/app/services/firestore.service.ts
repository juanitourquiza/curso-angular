import { Injectable } from '@angular/core';
import { Firestore, collectionData, deleteDoc, addDoc, collection, doc } from '@angular/fire/firestore';
import { Movie } from '../types/Movies';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: Firestore
  ) { }

  addMovie(data: Movie) {
    const collectionMovieRef = collection(this.firestore, 'movies');
    return addDoc(collectionMovieRef, data).then((response) => {
      console.log('TODO OK', response);
    }).catch((error) => {
      console.log('ERROR', error);
    })
  }

  getMovie() {
    const collectionMovieRef = collection(this.firestore, 'movies');
    return collectionData(collectionMovieRef, { idField: 'id'}) as Observable<Movie[]>;
  }

  deleteMovie(id: number): Promise<any> {
    const documentMovieRef = doc(this.firestore, `movies/${id}`)
    console.log(documentMovieRef);
    return deleteDoc(documentMovieRef);
  }

  getSerie() {
    const collectionSerieRef = collection(this.firestore, 'series');
    return collectionData(collectionSerieRef, { idField: 'id'}) as Observable<Movie[]>;
  }

  addSerie(data: Movie) {
    const collectionSerieRef = collection(this.firestore, 'series');
    return addDoc(collectionSerieRef, data).then((response) => {
      console.log('TODO OK', response);
    }).catch((error) => {
      console.log('ERROR', error);
    })
  }

  deleteSerie(id: number): Promise<any> {
    const documentSerieRef = doc(this.firestore, `series/${id}`)
    console.log(documentSerieRef);
    return deleteDoc(documentSerieRef);
  }
}
