let arr = [
    { id: 1, name: 'john', age: 18, profession: 'developer' },
    { id: 2, name: 'jack', age: 20, profession: 'developer' },
    { id: 3, name: 'karen', age: 19, profession: 'admin' },
  ];
  
  // Don't worry about consoling these functions, they are already being called on the button clicks.
  // Please don't change anything in the index.html file.
  
  function PrintDeveloper() {
    //Write your code here , just console.log
    let developers = arr.filter(employee => employee.profession === 'developer');
    console.log('Developers:', developers);
  }
   
  
  
  function addData() {
    //Write your code here, just console.log
    let newEmployee = { id: 4, name: 'susan', age: 20, profession: 'intern' };
  arr.push(newEmployee);
  console.log('Updated Array with New Employee:', arr);
  }
  
  function removeAdmin() {
    //Write your code here, just console.log
    arr = arr.filter(employee => employee.profession !== 'admin');
    console.log('Updated Array after Removing Admins:', arr);
  }
  
  function concatenateArray() {
    //Write your code here, just console.log
    let newEmployees = [
        { id: 5, name: 'alex', age: 22, profession: 'developer' },
        { id: 6, name: 'emma', age: 23, profession: 'developer' }
      ];
      arr = arr.concat(newEmployees);
      console.log('Updated Array after Concatenation:', arr);
  }
  
  // Here is an example of how functions work,
  // basically a function is a block of code which can directly access your 'arr' variable since arr is global.
  // If I have a function called consoleArr(), that can directly access arr like this to console it.
  
  function consoleArr() {
    console.log('Consoling Array Variable', arr);
    // Over here I can directly access the variable.
     consoleArr();
  }