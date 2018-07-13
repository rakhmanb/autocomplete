import { Component, OnInit } from '@angular/core';
import { IDropdownItem } from "./Model/IDropdownItem";
import { DataServices } from "./Services/data.service";
import { IDataService } from "./Services/IDataService";
import { Dropdown } from "./dropdown.component";

@Component({
  selector: 'app-root',
  template: `
   <dropdown [onItemSelect]="onSelect" [service]="_dataService" [onFilter]="onFilter" (selectedItem)="onSelectedItem($event)"></dropdown>
   <div>{{selectedItemText}}</div>
  `,
  styles: []
})
export class AppComponent {

  selectedItemText: string;

  private _dataService: IDataService;

  constructor(dataService: IDataService) {
    this._dataService = dataService;
  }

  onSelect(item: IDropdownItem) : void {
  }

  onFilter(text: string) : void {
    (<any>this).service.filter(text).subscribe((items:IDropdownItem[]) => {
      (<any>this).filteredDropDownItems = items;
    });

  }

  onSelectedItem($event: any): void {
    this.selectedItemText = $event.label + " " + $event.value;
  }


}
