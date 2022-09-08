import { Component, Input, EventEmitter, Output } from '@angular/core';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';
import { Commune } from 'src/app/models/commune.module';

@Component({
  selector: 'app-commune-table',
  templateUrl: './commune-table.component.html',
  styleUrls: ['./commune-table.component.css']
})
export class CommuneTableComponent {

  faSpinner = faSpinner;
  @Input() communes: Commune[] = [];
  @Input() communesIsLoading: boolean = false;
  @Input() communesIsLoaded: boolean = false;

  currentPage: number = 1;
  search: string = '';

  getLength(): number {
      return this.communes
          .filter(commune => commune.nom.toLowerCase().includes(this.search.toLowerCase()))
          .length;
  }

  getCommunes(): Commune[] {
      return this.communes
          .filter(commune => commune.nom.toLowerCase().includes(this.search.toLowerCase()))
          .slice((this.currentPage - 1) * 10, this.currentPage * 10);
  }


}
