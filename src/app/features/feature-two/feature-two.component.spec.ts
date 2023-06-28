import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FeatureTwoComponent} from './feature-two.component';
import {TranslateModule} from '@ngx-translate/core';

describe('FeatureTwoComponent', () => {
  let component: FeatureTwoComponent;
  let fixture: ComponentFixture<FeatureTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureTwoComponent],
      imports: [TranslateModule.forRoot()]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
