import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinksTopComponent } from './links-top.component';

describe('LinksTopComponent', () => {
  let component: LinksTopComponent;
  let fixture: ComponentFixture<LinksTopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinksTopComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LinksTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
