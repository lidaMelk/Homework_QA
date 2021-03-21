function printing() {
    console.log(1);
    setTimeout(function() { console.log(2); }, 1000);
    setTimeout(function() { console.log(3); }, 0);
    console.log(4);
}
printing();

// At first the printing function will execute synchrounus functions in Main Stack (console.log())
// console.log(1)->1, then console.log(4)->4
// Once the browser encounters the setTimeout it pops it from Main Stack to Callback Queue,
// where it waits for Main stack to finish the console.log-s, 
// then setTimeout gets back to Main Stack 
// and  will start to execute asynchronous methods (setTimeout()),with 0 millisecond then 1000 


// Get result in reverse order
function printing1() {
    setTimeout(function() { console.log(1); }, 1000);
    console.log(2);
    console.log(3);
    setTimeout(function() { console.log(4); }, 0);
}
printing1();