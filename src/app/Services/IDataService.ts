import { Observable } from 'rxjs/Rx';

export interface IDataService {
    getJson() : Observable<any>;
}