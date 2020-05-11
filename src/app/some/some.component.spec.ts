import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SomeComponent } from './some.component';

describe('SomeComponent', () => {
  let component: SomeComponent;
  let fixture: ComponentFixture<SomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SomeComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SomeComponent);
    component = fixture.componentInstance;
  });

  it('should be rendered', () => {
    // not rendered yet because ngOnInit hasn't run
    expect(fixture.nativeElement.querySelector('p')).toBeFalsy();

    // ngOnInitRuns, which sets shouldDisplayTitle to true, then change detection and rerendering.
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('p')).toBeTruthy();

    // The title is still present because we changed the data, but haven't re-run fixture.detectChanges()
    component.shouldDisplayTitle = false;
    expect(fixture.nativeElement.querySelector('p')).toBeTruthy();

    // Once change detection sees that shouldDisplayTitle is false, it rerenders the component without our p tag.
    fixture.detectChanges();
    expect(fixture.nativeElement.querySelector('p')).toBeFalsy();
  });
});
