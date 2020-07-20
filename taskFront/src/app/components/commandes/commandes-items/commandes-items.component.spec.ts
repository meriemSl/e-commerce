import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandesItemsComponent } from './commandes-items.component';

describe('CommandesItemsComponent', () => {
  let component: CommandesItemsComponent;
  let fixture: ComponentFixture<CommandesItemsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommandesItemsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommandesItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
