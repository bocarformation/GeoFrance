import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Departement } from 'src/app/models/departement.model';
import { Commune } from 'src/app/models/commune.module';
import { ToastrService } from 'ngx-toastr'



@Component({
  selector: 'app-commune',
  templateUrl: './commune.component.html',
  styleUrls: ['./commune.component.css']
})
export class CommuneComponent{

  departements: Departement[] = [];
  departementsIsLoading: boolean = false;
  departementsIsLoaded: boolean = false; 
  communes: Commune[] = [];
  communesForGraph: { name: string, value: number }[] = [];
  communesIsLoading: boolean = false;
  communesIsLoaded: boolean = false;




 constructor(private httpClient: HttpClient, private toastr: ToastrService) { }

  loadDepartements(): void{
    this.departementsIsLoading = true;
    this.httpClient.get<Departement[]>('https://geo.api.gouv.fr/departements').subscribe(
      data => {
        this.toastr.success('Liste des départements chargés', 'Chargement OK')
        this.departements = data;
        this.departementsIsLoaded = true;
        this.departementsIsLoading = false;
      }
    )
  }

  loadCommunes(codeDepartement: string): void{
    
      this.communesIsLoading = true;
      this.httpClient.get<Commune[]>(`https://geo.api.gouv.fr/departements/${codeDepartement}/communes`).subscribe(
        data => {
          this.toastr.success(`Liste des communes chargée`, 'Chargement terminé');
          this.communes = data;
          this.communesIsLoaded = true;
          this.communesIsLoading = false;
        }
      )
      

  }



}
