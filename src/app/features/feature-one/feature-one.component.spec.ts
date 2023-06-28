import {ComponentFixture, TestBed} from '@angular/core/testing';

import {FeatureOneComponent} from './feature-one.component';
import {TranslateModule} from '@ngx-translate/core';

describe('FeatureOneComponent', () => {
  let component: FeatureOneComponent;
  let fixture: ComponentFixture<FeatureOneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FeatureOneComponent],
      imports: [TranslateModule.forRoot()]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeatureOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
