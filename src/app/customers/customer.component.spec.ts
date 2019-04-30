import {async, ComponentFixture, TestBed} from '@angular/core/testing';
import {CustomerComponent} from './customer.component';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {NO_ERRORS_SCHEMA} from '@angular/core';
import {getBlankCustomer} from './testing/test-customer';
import {AbstractMockObservableService} from './testing/test-subscribe-helper';
import createSpy = jasmine.createSpy;
import {emailMatcher, ratingRange} from './util-functions';


////// Testing Vars //////
let component: CustomerComponent;
let fixture: ComponentFixture<CustomerComponent>;
// create new instance of FormBuilder
const formBuilder: FormBuilder = new FormBuilder();

class MockService extends AbstractMockObservableService {
  doStuff() {
    return this;
  }
}

/*
class SubscribeEmailControl {
  public data: Data[];
  public subscribeEmailControl(): Observable<AbstractControl> {
    this.data = results;
    return Observable.of(this.data);
  }
}

class MockMyServiceWithError {
  public data: Data[];
  public getData(): Observable<Data[]> {
    this.data = results;
    return new ErrorObservable(this.data);
  }
}
*/
let mockService;
describe('CustomerComponent', () => {

  beforeEach(async(() => {
    mockService = new MockService();
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
    compExp.ngOnInit();
    expect(compExp.populateTestData()).toBeUndefined();
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

  it('should have setNotification() method', () => {
    // Arrange
    // Act
    // Assert
    /*Testing if part*/
    expect(component.setNotification('text')).toBeUndefined();
    /*Testing else part*/
    expect(component.setNotification('random text')).toBeUndefined();

  });

  it('should have subscribeEmailControl() method',  () => {
    // Arrange
    // Act
    // Assert
    expect(component.subscribeEmailControl()).toBeUndefined();
  });

  it('should have subscribeCustomerForm() method',  () => {
    // Arrange
    // Act
    // Assert
    expect(component.subscribeCustomerForm()).toBeUndefined();
  });

  it('should have setMessage() method', () => {
    // Arrange
    const emailControl = component.customerForm.get('emailGroup.email');
    const allCtrls = component.customerForm.controls;
    const check = allCtrls.hasOwnProperty('firstName');
    const buil = new FormControl();
    /*    component.customerForm*/
    expect(component.setMessage(buil)).toBeUndefined();
  });


});
