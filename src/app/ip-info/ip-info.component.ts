import { IpInfoService, IpInfo } from './../ip-info.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ip-info',
  templateUrl: './ip-info.component.html',
  styleUrls: ['./ip-info.component.css']
})
export class IpInfoComponent implements OnInit {

  public ipInfo: IpInfo;
  constructor(private ipService: IpInfoService) {
    this.ipInfo = {};
  }

  ngOnInit(): void {
    this.ipService.getIpInfo().subscribe((value: IpInfo) => {
      this.ipInfo = value;
    });
  }

}
