function printLength(value: string | number) {
    if (typeof value === 'string') {
      console.log(value.length); 
    } else {
      console.log(value.toString().length); 
    }
  }

  printLength('Hello');
  printLength(123);
  