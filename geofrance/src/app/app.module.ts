import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ToastrModule } from 'ngx-toastr';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommuneComponent } from './components/commune/commune.component';
import { DepartementTableComponent } from './components/departement-table/departement-table.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { PaginationModule } from 'ngx-bootstrap/pagination';
import { CommuneTableComponent } from './components/commune-table/commune-table.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';


@NgModule({
  declarations: [
    AppComponent,
    CommuneComponent,
    DepartementTableComponent,
    CommuneTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // À ajouter MANUELLEMENT pour récupérer les méthodes GET, POST etc.
    ToastrModule.forRoot(),
    FormsModule, // À ajouter OBLIGATOIREMENT POUR LA PAGINATION
    PaginationModule, // À ajouter MANUELLEMENT pour faire fonctionner le module
    NgbModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  faSearch = faSearch;
  faSpinner = faSpinner;
  
}
