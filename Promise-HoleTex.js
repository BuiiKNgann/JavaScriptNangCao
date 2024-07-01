const currentPromise = new Promise ((resolve, reject) => {
    let condition = true; 

    if (condition) {
        setTimeout(() => {
            resolve('Success');
        }, 3000)
    } else {
        reject('Error');
    }
  

});


currentPromise.then((data) => {
console.log(data);
}).catch(err => {
    console.log(err);
})