import { MockIpInfoService } from './../mock-ip-info.service';
import { IpInfoService } from './../ip-info.service';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IpInfoComponent } from './ip-info.component';

describe('IpInfoComponent', () => {
  let component: IpInfoComponent;
  let fixture: ComponentFixture<IpInfoComponent>;
  let mockIpInfoService: MockIpInfoService;

  beforeEach(async(() => {

    mockIpInfoService = new MockIpInfoService();
    mockIpInfoService.ipDataToReturn = {
      ip: "0.0.0.0",
      city: "Anywhere",
      country: "USA",
    };

    TestBed.configureTestingModule({
      declarations: [
        IpInfoComponent
      ],
      providers: [
        { provide: IpInfoService, useValue: mockIpInfoService }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IpInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should show ip information', () => {
    const ipAddressElement = fixture.nativeElement.querySelector('#ip-address').innerText;
    expect(ipAddressElement).toEqual(mockIpInfoService.ipDataToReturn.ip);
  });
});
