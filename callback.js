 /*  function test() {
    setTimeout(() => console.log('1'),0) 
     
    console.log(2);
    console.log(3);
}
function httpGetAsync(theurl, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) callback(xmlHttp);

    };
    xmlHttp.open("GET", theurl, true);
    xmlHttp.send(null)
}
// function hell

httpGetAsync('https://picsum.photos/200/300', (data) => {
    console.log(data);
    document.getElementById('img_1').setAttribute('src', data.responseURL);
 
httpGetAsync('https://picsum.photos/200/300', (data) => {
    console.log(data);
    document.getElementById('img_2').setAttribute('src', data.responseURL);
 
httpGetAsync('https://picsum.photos/200/300', (data) => {
    console.log(data);
    document.getElementById('img_3').setAttribute('src', data.responseURL);
})
})
});
test();  
*/
  /* 
// PROMISE
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
})  */

// PROMISES

function test() {
    setTimeout(() => console.log('1'),0) 
     
    console.log(2);
    console.log(3);
}
function httpGetAsync(theurl, resolve) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) resolve(xmlHttp);

    };
    xmlHttp.open("GET", theurl, true);
    xmlHttp.send(null)
}

const currentPromise = new Promise ((resolve, reject) => {
   
  httpGetAsync('https://picsum.photos/200/300',resolve)
 
});
const currentPromise2 = new Promise ((resolve, reject) => {
   
    httpGetAsync('https://picsum.photos/200/300',resolve)
  
  });

  const currentPromise3 = new Promise ((resolve, reject) => {
   
    httpGetAsync('https://picsum.photos/200/300',resolve)
  
  });
const executeAsync = async() => {
    try { 
    const reponse = await currentPromise;
    document.getElementById('img_1').setAttribute('src', reponse.responseURL);
    const reponse2 = await currentPromise2;
    document.getElementById('img_2').setAttribute('src', reponse2.responseURL);
    const reponse3 = await currentPromise3;
    document.getElementById('img_3').setAttribute('src', reponse3.responseURL);
} catch (err) {
    console.log({err});
}
}
executeAsync();


/*
currentPromise.then((data) => {
console.log(data);
document.getElementById('img_1').setAttribute('src', data.responseURL);
return currentPromise2;

})
.then(data => {

    document.getElementById('img_2').setAttribute('src', data.responseURL);
    return currentPromise3;
})
.then(data => {

    document.getElementById('img_3').setAttribute('src', data.responseURL);
    return currentPromise3;
})
.catch(err => {
    console.log(err);
}) 

*/