// promise example

const Promise = new Promise((resolve, reject) => {
   setTimeout(() => {
    const isSuccess = true;
    if (isSuccess) {
        resolve('Đã lấy dữ liệu thành công')
    } else {
        reject('Lấy dữ liệu không thành công');
    }
   }, 1000);
});
Promise.then((result) => {
    console.log(result);
}).catch((error)=> {
    console.log(error);
});