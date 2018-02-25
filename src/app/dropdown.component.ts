import { Component, Input, Output, EventEmitter } from '@angular/core';
import { IDropdownItem } from './Model/IDropdownItem';

@Component ({
 selector: "dropdown",
 templateUrl: "dropdown.component.html"   
})
export class Dropdown {
    private _dropDownItems: IDropdownItem[];
    private _filteredDropDownItems: IDropdownItem[] = [];

    public selectedValue: string = "";

    @Input() public onItemSelect: (item: IDropdownItem) => void;

    @Input()
    public set DropDownItems(items: IDropdownItem[]) {
        this._dropDownItems = items;
    }

    public get DropDownItems() {
        return this._dropDownItems;
    }

    public get filteredDropDownItems(){
        return this._filteredDropDownItems;
    }

    public get isEmpty():boolean {
        if(this._filteredDropDownItems) {
            return this._filteredDropDownItems.length === 0;
        }
        return true;
    }

    @Output() public selectedItem = new EventEmitter();

    constructor() {
    }

    public checkMatches(event: any) {
        if(event.target.value === "")
        {
            this._filteredDropDownItems = [];
        }
        else {
            this.filter(event.target.value.toLowerCase());
        }
    }

    public keyDown(event: any): void {

        if(event.keyCode === 13) {
            if(this._filteredDropDownItems.length > 0) {
                this.onSelect(this._filteredDropDownItems[0]);
                return;
            }
            else {
                
                let tempItem = {
                    label : event.target.value,
                    value: -1
                }
    
                this.onSelect(tempItem);
            }

            this._filteredDropDownItems = [];
        }
    }

    public onSelect(item: IDropdownItem) : void {
        if(this.onItemSelect){
            this.onItemSelect(item);
        }
        this.selectedValue = item.label;
        this.selectedItem.emit(item);
        this._filteredDropDownItems = [];
    }

    private filter(text:string): void {
        this._filteredDropDownItems = [];

        for(let i = 0; i < this._dropDownItems.length; i++){
            if(this._dropDownItems[i].label.toLowerCase().indexOf(text) > -1) {
                this._filteredDropDownItems.push(this._dropDownItems[i]);
            }
        }
    }
}
