import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingAdd } from './shopping-add';

describe('ShoppingAdd', () => {
  let component: ShoppingAdd;
  let fixture: ComponentFixture<ShoppingAdd>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShoppingAdd]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShoppingAdd);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
