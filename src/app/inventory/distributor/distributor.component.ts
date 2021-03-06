import {Component, AfterViewInit} from "@angular/core";
import {TdDialogService} from "@covalent/core";
import {DistributorFormComponent} from "./distributor-form/distributor-form.component";
import {RESTService} from "@covalent/http";
import {TdDataTableColumn} from "../../td-data-table-column";
import {Observable} from "rxjs";
import {DistributorService, Distributor} from "../../../services/items.service";


@Component({
  selector: 'app-distributor',
  templateUrl: 'distributor.component.html',
  styleUrls: ['distributor.component.scss'],
  entryComponents: [DistributorFormComponent]
})
export class DistributorComponent implements AfterViewInit {

  columns: TdDataTableColumn[] = [
    {name: 'id', label: 'id', sortable: true},
    {name: 'name', label: 'Name', sortable: true},
    {name: 'retail_shop.name', 'label': 'Shop', nested: true}
  ];

  constructor(
    private _distributorService: DistributorService,
    private _dialogService: TdDialogService) {
  }

  ngAfterViewInit(): void {

  }

  filter = (): RESTService<any> => {

    return this._distributorService
  };

  addRow = (): Observable<Distributor> => {
    let distributor = <Distributor>{};
    let _dialog = this._dialogService.open(DistributorFormComponent);
    _dialog.componentInstance.distributor = distributor;
    return _dialog.afterClosed()
  };

  editRow = (distributor: Distributor): Observable<Distributor> => {
    let _dialog = this._dialogService.open(DistributorFormComponent);
    _dialog.componentInstance.distributor = Object.assign({}, distributor);
    return _dialog.afterClosed()
  };


  toggleRow = (distributor: Distributor): Observable<Distributor>=>{
    return this._distributorService.delete(distributor.id)
  }
}

