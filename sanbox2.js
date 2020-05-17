//Fetch api method is an alternative to the http method on sandbox
//its rejected only when we get a network error
//if there is a type it will resolve but willl give a 404 down in thre status
//first we fetch the data, then we take the response and return response.json
//and inside we fire afunction wehre we have that data
//then we catch the error at the end
// fetch('todos/coding.json').then((response)=>{
//     console.log('resolved',response);
// }).catch((err)=>{
//     console.log('rejected',err);
// });

//async & await

//we set all the code into an asynchronous function and then 
//use the await keyword to chain promises together in a more readable and logical way

const getTodos = async() =>{
const response = await fetch('todos/games.json');

if(response.status !==200){
    throw new Error('cannot fetch the data');
}

const data = await response.json();
return data;
};

getTodos()
.then(data => console.log('resolved:',data))
.catch(err => console.log('rejected:',err.message));