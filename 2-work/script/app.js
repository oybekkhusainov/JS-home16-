function generator(address) {
         return address.split('.').join('[.]');
    }
     
     let address1 = "2.3.1.2";
     let address2 = "300.100.50.0";
     console.log(generator(address1)); 
     console.log(generator(address2)); 
    