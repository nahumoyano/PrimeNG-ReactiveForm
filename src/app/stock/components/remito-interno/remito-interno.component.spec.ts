import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RemitoInternoComponent } from './remito-interno.component';

describe('RemitoInternoComponent', () => {
  let component: RemitoInternoComponent;
  let fixture: ComponentFixture<RemitoInternoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RemitoInternoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RemitoInternoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
