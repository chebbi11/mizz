import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeProviderUserComponent } from './home-provider-user.component';

describe('HomeProviderUserComponent', () => {
  let component: HomeProviderUserComponent;
  let fixture: ComponentFixture<HomeProviderUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeProviderUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeProviderUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
