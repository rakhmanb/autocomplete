import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {IDropdownItem} from '../Model/IDropdownItem';
import {IDataService} from './IDataService';
import 'rxjs/add/operator/map';

@Injectable()
export class DataServices implements IDataService {

    constructor(private http: Http) {
    }

    public getJson() : Observable<IDropdownItem[]> {
        return this.http.get("./assets/MOCK_DATA_1000.json")
                        .map((res:any) => res.json());
    }

}