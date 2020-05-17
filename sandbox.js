const getTodos = (resource,callback) => {

return new Promise((resolve,reject)=>{
    //Create request Object
    const request = new XMLHttpRequest();


    //we dont know when the request is ocmplete
    //therefore we need a way to track that data
    //we use an event listender event name is readystatachange
    //readystatechange  will give you the status of the http request actoin
    request.addEventListener('readystatechange',()=>{
    
        if(request.readyState === 4 && request.status === 200){
            const data = JSON.parse(request.responseText)

              resolve(data);  
            //callback(undefined, data)
        }else if (request.readyState ===4){
            reject('error getting resource');
           // callback('could not fetch the data', undefined)
        }
    });
    //take request and open it 
    // request type is GET to retrive data then , link from where you want the date
    //https://jsonplaceholder.typicode.com/todos/
    //jere you could alsl put the http or the local josn file
    request.open('GET',resource);
    
    //now we have to send the request
    request.send();
});


}

//this is promise chaining
getTodos('todos/comics.json').then(data =>{
    console.log('promise resolved',data);
    return getTodos('todos/games.json',data)
}).then(data=>{
    console.log('promise 2 reosolved:',data);
    return getTodos('todos/coding.json');
}).then(data =>{
    console.log('promise 2 resovled:',data);
}).catch((err)=>{
    console.log('promise rejected',err);
});














//this is a callback within a call back another 
//way to do is using promises
// getTodos('todos/games.json',(err,data)=>{
//     console.log(data);
//     getTodos('todos/comics.json',(err,data)=>{
//         console.log(data);
//         getTodos('todos/coding.json',(err,data)=>{
//             console.log(data);
//         })
//     });
// });

//this would be use wiht a reugalr http
//getTodos((err,data)=>{
    // if(err){
    //     console.log(err);
    // }else {
    //     console.log(data);
    // }
// });