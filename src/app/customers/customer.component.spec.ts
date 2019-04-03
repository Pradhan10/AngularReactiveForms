import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerComponent } from './customer.component';
import {FormBuilder} from '@angular/forms';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {getBlankCustomer} from './testing/test-customer';

////// Testing Vars //////
let component: CustomerComponent;
let fixture: ComponentFixture<CustomerComponent>;
// create new instance of FormBuilder
const formBuilder: FormBuilder = new FormBuilder();


/*describe('CustomerComponent', () => {
  beforeEach(async(() => {
    fixture = TestBed.createComponent(CustomerComponent);
    component = fixture.componentInstance;
    TestBed.configureTestingModule({
      declarations: [ CustomerComponent ]
    })
    .compileComponents();
  }));

  it('should have emailMatcher method',  () =>  {
    expect(component).toBeDefined();
  });

});*/

describe('CustomerComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerComponent],
      providers: [
        FormBuilder
      ],
      schemas: [ NO_ERRORS_SCHEMA ]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CustomerComponent);
        component = fixture.componentInstance;
      });
  }));

  // create reusable function for a dry spec.
  function updateForm(userEmail, userPassword) {
    component.customerForm.controls['email'].setValue(userEmail);
    component.customerForm.controls['password'].setValue(userPassword);
  }
  it('should have default props', () => {
    expect(component.user).toEqual(getBlankCustomer());
  });

/*  it('should have emailMatcher',  () => {
    component
  });*/
});
