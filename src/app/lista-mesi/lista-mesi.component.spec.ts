import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaMesiComponent } from './lista-mesi.component';

describe('ListaMesiComponent', () => {
  let component: ListaMesiComponent;
  let fixture: ComponentFixture<ListaMesiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaMesiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaMesiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
