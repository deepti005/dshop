import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpenPoputContainerComponent } from './open-poput-container.component';

describe('OpenPoputContainerComponent', () => {
  let component: OpenPoputContainerComponent;
  let fixture: ComponentFixture<OpenPoputContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpenPoputContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpenPoputContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
