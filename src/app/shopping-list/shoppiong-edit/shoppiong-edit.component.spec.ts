import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppiongEditComponent } from './shoppiong-edit.component';

describe('ShoppiongEditComponent', () => {
  let component: ShoppiongEditComponent;
  let fixture: ComponentFixture<ShoppiongEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppiongEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppiongEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
