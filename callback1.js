
// bt1
/*
// Hàm thực hiện một phép tính và gọi callback để xử lý kết quả
function calculate(a, b, operation, callback) {
  let result;

  if (operation === 'add') {
    result = a + b;
  } else if (operation === 'subtract') {
    result = a - b;
  } else {
    result = "Phép tính không được hỗ trợ";
  }

  // Gọi callback với kết quả
  callback(result);
}

// Hàm callback đơn giản để hiển thị kết quả
function displayResult(result) {
  console.log("Kết quả là:", result);
}

// Sử dụng hàm calculate với callback displayResult
calculate(5, 3, 'add', displayResult);
*/

function addNumber (a,b,callback) {
    const sum = a+b;
    // gọi lại callback với kết quả
    callback(sum);
}
// Hàm callback đơn giản để hiển thị kết quả
function displayResult (sum) {
    console.log('kết quả là: ', sum);
}

// sử dụng hàm chính với callback

addNumber(5,3,displayResult)
