import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonitaryComponent } from './monitary.component';

describe('MonitaryComponent', () => {
  let component: MonitaryComponent;
  let fixture: ComponentFixture<MonitaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonitaryComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MonitaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
