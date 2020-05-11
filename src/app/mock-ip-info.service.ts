import { IpInfo } from './ip-info.service';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';


@Injectable({
    providedIn: 'root'
})
export class MockIpInfoService {

    constructor() { }

    public ipDataToReturn: IpInfo;
    getIpInfo(): Observable<IpInfo> {
        return of(this.ipDataToReturn).pipe(delay(1000));
    }
}