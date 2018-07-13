import { Observable } from 'rxjs/Rx';

export abstract class IDataService {
    abstract getJson() : Observable<any>;
    abstract filter(text:string): Observable<any>;
}