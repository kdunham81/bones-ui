import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GearlocSkillsComponent } from './gearloc-skills.component';

describe('GearlocSkillsComponent', () => {
  let component: GearlocSkillsComponent;
  let fixture: ComponentFixture<GearlocSkillsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GearlocSkillsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GearlocSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
