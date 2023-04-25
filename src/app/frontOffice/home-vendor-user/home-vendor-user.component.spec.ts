import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeVendorUserComponent } from './home-vendor-user.component';

describe('HomeVendorUserComponent', () => {
  let component: HomeVendorUserComponent;
  let fixture: ComponentFixture<HomeVendorUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeVendorUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeVendorUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
