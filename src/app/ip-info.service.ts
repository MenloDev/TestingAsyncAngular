import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IpInfoService {

  constructor(private httpClient: HttpClient) { }

  getIpInfo(): Observable<IpInfo> {
    return this.httpClient.get<IpInfo>('http://ipinfo.io/json');
  }
}

export interface IpInfo {
  ip?: string,
  hostname?: string,
  city?: string,
  region?: string,
  country?: string,
  loc?: string,
  org?: string,
  postal?: string,
  timezone?: string,
  readme?: string
}