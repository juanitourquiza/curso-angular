import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {

  totalPeliculas = 0;
  totalSeries = 0;

  constructor(
    private router: Router,
    private _firestoreService: FirestoreService
  ){}


  ngOnInit(){
    this.obtenerPeliculas();
    this.obtenerSeries();
  }

  redirectTo(ruta: string) {
    this.router.navigate([ruta])
  }

  obtenerPeliculas() {
    this._firestoreService.getMovie().subscribe({
      next: (response) => {
        this.totalPeliculas = response.length;
      }
    })
  }

  obtenerSeries() {
    this._firestoreService.getSerie().subscribe({
      next: (response) => {
        console.log('response===', response);
        this.totalSeries = response.length;
      }
    })
  }
}
