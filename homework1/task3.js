function loadArray() {
    return new Promise((resolve) => {
        resolve([{
                id: 1,
                name: 'John'
            },
            {
                id: 2,
                name: 'James',
            }
        ]);
    });
}

function getItem(array, id) {
    return new Promise((resolve, reject) => {
        const firstItem = array.find(item => item.id == id);
        if (firstItem) {
            resolve(firstItem);
        } else {
            reject('There is no such item in the array!');
        }
    });
}
async function myAsyncFunc(id) {
    try {
        const array = await loadArray();
        const result = await getItem(array, id);
        console.log(result);
    } catch (err) {
        console.log(err);
    }
}
myAsyncFunc(2);
myAsyncFunc(5);