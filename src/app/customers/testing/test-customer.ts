import {Customer} from '../customer';


export function getBlankCustomer(): Customer {

  return {
    firstName: 'Raju',
    lastName: 'Rastogi',
    email: 'iamrastogi@raju.com',
    sendCatalog: false,
    addressType: 'home',
    street1: '421-G Parkwy avenue',
    state: 'Soli-Island'
  };

}
