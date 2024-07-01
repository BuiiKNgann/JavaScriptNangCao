const  callback = (error, data) => {

    if (error) {
        console.log('calling callback with error', error );
    }
    if (data) {
        console.log('calling callback with data: ', data);

    }
}
 function getTodos(id, callback) {

    return new Promise((resolve, reject)=> {
        var request = new XMLHttpRequest();
        request.onreadystatechange = function() {
            if (this.readyState == 4 && request.status ===200) {
               // Typical action to be performed when the document is ready:
               //  console.log('check res: ',request.responseText); 
              const data = JSON.parse(request.responseText); // string thì dùng parse để convert qua object
              const dataString = JSON.stringify(data);// stringify convert thì object sang string
        
            //   callback(undefined, data);
            resolve(data)
             //  callback(undefined,dataString)
              // callback(undefined, request.responseText)
            } 
            if(this.readyState === 4 && request.status !== 200){
        // callback('Something wrong', undefined);
        reject('something wrong')
            }
             
        };
        request.open("GET", `https://jsonplaceholder.typicode.com/todos/${id}`, true);
       request.withCredentials = true;
        request.send();
    })
  
 }


 const getNewTodo = async(id) => {

    try {
        let response = await  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if (response && response.status !==200) {
            throw new Error('Simethung wrongs with status code: '+ response.status)
        // reject
        let data = await response.json()
 return data; // resolve*/
        }
    } catch (e) {
console.log('check catch error: ',e.message);
    }
    /*
let response = await  fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
console.log('check response: ', response);
if (response && response.status !==200) {
    throw new Error('Simethung wrongs with status code: '+ response.status)
// reject
}
let data = await response.json()
 return data; // resolve*/
 }  
 getNewTodo('edfsdfs').then(data => {
    console.log('check get data: ', data);
 })


 .catch(err => {
    console.log('check error: ', err.message);
 })
 /*
 fetch('https://jsonplaceholder.typicode.com/todos/1')
 .then(Response  => {
    return Response.json()
     
 })
 .then(data => {
    console.log('check fetch data: ', data);
 })

 */




 /*

 getTodos(1).then(data1 => {
    console.log('get data1: ', data1);
    return getTodos(2);
}).then(data2 => {

    console.log('get data2: ', data2);
    return getTodos(3)
}).then(data3 => {
    console.log('get data3: ', data3);

})



.catch(err => {
    console.log('>>>>', err);
})

*/
 /*
getTodos(1).then(data => {
    console.log('get data: ', data);
    getTodos(2).then(data => {
        console.log('get data: ', data);
        
    })
}).catch(err => {
    console.log('>>>>', err);
}) */


 /*
getTodos(1, (error,data) =>{

    if (error) {
        console.log('calling callback with error', error );
    }
    if (data) {
        console.log('calling callback with data: ', data);

        getTodos(2, (error,data)=> {
            if (error) {
                console.log('calling callback with error', error );
            }
            if (data) {
                console.log('calling callback with data: ', data);
        

                getTodos(3,(error,data) => {

                    if (error) {
                        console.log('calling callback with error', error );
                    }
                    if (data) {
                        console.log('calling callback with data: ', data);
                
                    }

                })
            }

        });
    }
});
 
 */