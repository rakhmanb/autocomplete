import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import {IDropdownItem} from '../Model/IDropdownItem';
import {IDataService} from './IDataService';
import 'rxjs/add/operator/map';

@Injectable()
export class MockDataService implements IDataService {
    filter(): Observable<any> {
        throw new Error("Method not implemented.");
    }

    constructor(private http: Http) {
    }

    public getJson() : Observable<IDropdownItem[]> {

        return Observable.of([{value:1,label:"test"},
                                {value:2,label:"test2"},
                                {value:3, label:"bima1"} ]);
    }

}