import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgresSkillsComponent } from './progres-skills.component';

describe('ProgresSkillsComponent', () => {
  let component: ProgresSkillsComponent;
  let fixture: ComponentFixture<ProgresSkillsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgresSkillsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProgresSkillsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
