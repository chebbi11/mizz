import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLivreurUserComponent } from './home-livreur-user.component';

describe('HomeLivreurUserComponent', () => {
  let component: HomeLivreurUserComponent;
  let fixture: ComponentFixture<HomeLivreurUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomeLivreurUserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLivreurUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
