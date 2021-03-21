// THE OLD VERSION
// function addWithDelay() {
//     const asd = new Promise((resolve, reject) => {
//         const arrayLikeArguments = [...arguments];
//         const hasNegativeArgument = arrayLikeArguments.some((x) => x < 0);
//         if (hasNegativeArgument) {
//             reject('Error! Some parameter is a negative number!');
//         } else {
//             const argumentsSum = arrayLikeArguments.reduce((accumulator, curentValue) => accumulator + curentValue, 0);
//             setTimeout(() => {
//                 resolve(argumentsSum);
//             }, 1000);
//         }
//     });

//     return asd.then(result => console.log(result),
//         err => console.log(err));
// }

// THE NEW VERSION
function addWithDelay(...rest) {
    const pro = new Promise((resolve, reject) => {
        const arrayLikeArguments = [...rest];
        let argumentsSum = 0;
        arrayLikeArguments.map((x) => {
            if (x < 0) {
                reject('Error! Some parameter is a negative number!');
            }
            argumentsSum += x;
            setTimeout(() => {
                resolve(argumentsSum);
            }, 1000);
        });
    });
    pro.then(result => console.log(result),
        err => console.log(err));
}
addWithDelay(1, 2, 3, 4, -5);
addWithDelay(1, 2, 3, 4, 5);