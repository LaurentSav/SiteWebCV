import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetHomeComponent } from './projet-home.component';

describe('ProjetHomeComponent', () => {
  let component: ProjetHomeComponent;
  let fixture: ComponentFixture<ProjetHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjetHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
