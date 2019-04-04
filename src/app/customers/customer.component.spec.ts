import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {CustomerComponent} from './customer.component';
import {FormBuilder} from '@angular/forms';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {getBlankCustomer} from './testing/test-customer';

////// Testing Vars //////
let component: CustomerComponent;
let fixture: ComponentFixture<CustomerComponent>;
// create new instance of FormBuilder
const formBuilder: FormBuilder = new FormBuilder();

describe('CustomerComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CustomerComponent],
      providers: [
        FormBuilder
      ],
      schemas: [NO_ERRORS_SCHEMA]
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(CustomerComponent);
        component = fixture.componentInstance;
        component.ngOnInit();
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

  it('should have component defined', () => {
    expect(component).toBeDefined();
  });

  it('should have buildAddress() method', () => {
    expect(component.buildAddress()).toBeDefined();
  });

  it('should have populateTestData() method', () => {
    const compExp = new CustomerComponent(formBuilder);
    expect(compExp.populateTestData()).toHaveBeenCalled();
  });


  it('should have addAddress() method', () => {
    // Arrange
    // Act
    // Assert
    expect(component.addAddress()).toBeUndefined();
  });

  it('should have save() method', () => {
    // Arrange
    // Act
    // Assert
    expect(component.save()).toBeUndefined();
  });

  it('should have setMessage() method', () => {
    // Arrange
    const mockAbstractControl = jasmine.createSpyObj('AbstractControl', ['']);
    /*Test else part*/
    expect(component.setMessage(mockAbstractControl)).toBeUndefined();
    const spyPropTouched = spyOnProperty(mockAbstractControl, 'touched').and.returnValue(true);
    const spyPropDirty = spyOnProperty(mockAbstractControl, 'dirty').and.returnValue(true);
    const spyPropErrors = spyOnProperty(mockAbstractControl, 'errors').and.returnValue(true);
    // Act
    // Assert
    /*Test if part*/
    expect(spyPropErrors).toBeUndefined();
  });

  it('should have setNotification() method', () => {
    // Arrange
    // Act
    // Assert
    /*Testing if part*/
    expect(component.setNotification('text')).toBeUndefined();
    /*Testing else part*/
    expect(component.setNotification('random text')).toBeUndefined();

  });


});
