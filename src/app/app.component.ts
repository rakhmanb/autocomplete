import { Component, OnInit } from '@angular/core';
import { IDropdownItem } from "./Model/IDropdownItem";
import { DataServices } from "./Services/data.service";
import { IDataService } from "./Services/IDataService";

@Component({
  selector: 'app-root',
  template: `
   <dropdown [DropDownItems]="items" [onItemSelect]="onSelect" (selectedItem)="onSelectedItem($event)"></dropdown>
   <div>{{selectedItemText}}</div>
  `,
  styles: []
})
export class AppComponent implements OnInit {

  selectedItemText: string;

  private _dataService: IDataService;

  items: IDropdownItem[];

  ngOnInit(): void {
    this._dataService.getJson().subscribe((items:IDropdownItem[]) => {
      this.items = items;
    });
  }

  constructor(dataService: DataServices) {
    this._dataService = dataService;
  }

  onSelect(item: IDropdownItem) : void {
  }

  onSelectedItem($event: any): void {
    this.selectedItemText = $event.label + " " + $event.value;
  }


}
