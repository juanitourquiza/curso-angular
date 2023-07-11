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

  constructor(
    private router: Router,
    private _firestoreService: FirestoreService
  ){}


  ngOnInit(){
    this.obtenerPeliculas();
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

}
