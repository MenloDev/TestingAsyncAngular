import { MockIpInfoService } from './../mock-ip-info.service';
import { IpInfoService } from './../ip-info.service';
import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';

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

  let start;
  beforeEach(() => {
    fixture = TestBed.createComponent(IpInfoComponent);
    component = fixture.componentInstance;
    start = Date.now();
  });

  afterEach(() => {
    console.log(Date.now() - start);
  });

  it('should show ip information', fakeAsync(() => {
    fixture.detectChanges();
    tick(1000);
    fixture.detectChanges();

    let ipAddressElement = fixture.nativeElement.querySelector('#ip-address').innerText;
    expect(ipAddressElement).toEqual(mockIpInfoService.ipDataToReturn.ip);
  }));
});
