import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import {CustomerComponent} from './customers/customer.component';
import {MaterialModule} from './shared/material.module';
import {ReactiveFormsModule} from '@angular/forms';
describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        MaterialModule,
        ReactiveFormsModule
      ],
      declarations: [
        AppComponent,
        CustomerComponent,
      ],
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'Angular Material Forms'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Angular Material Forms');
  }));

});
