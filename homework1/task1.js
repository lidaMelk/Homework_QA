// THE OLD VERSION 
// function logOne() {
//     return new Promise((resolve) => {
//         setTimeout(function() {
//             resolve('one!');
//         }, Math.random() * 1000);
//     });
// }

// function logTwo() {
//     return new Promise((resolve) => {
//         setTimeout(function() {
//             resolve('two!');
//         }, Math.random() * 1000);
//     });
// }

// async function inOrder(one, two) {
//     console.log(await one());
//     console.log(await two());
// }

// THE NEW VERSION
function logOne() {
    setTimeout(function() {
        console.log('one!');
    }, Math.random() * 1000);
}

function logTwo() {
    setTimeout(function() {
        console.log('two!');
    }, Math.random() * 1000);
}

function inOrder(one, two) {
    one();
    setTimeout(() => two(), 1000);
}
inOrder(logOne, logTwo);