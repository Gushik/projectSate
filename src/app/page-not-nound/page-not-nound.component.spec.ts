import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageNotNoundComponent } from './page-not-nound.component';

describe('PageNotNoundComponent', () => {
  let component: PageNotNoundComponent;
  let fixture: ComponentFixture<PageNotNoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PageNotNoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PageNotNoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
