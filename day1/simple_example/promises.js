const posts = [
    {title: 'Post One', body: 'This is post one'},
    {title: 'Post Two', body: 'This is post two'}
]

function getPosts(){
    setTimeout(() =>{
        let output = '';
        posts.forEach((post, index) =>{
            output += `<li>${post.title} ${index}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

// this will reject and produce error shown in console
// function createPost(post){
//     return new Promise((resolve, reject) =>{
//         setTimeout(()=>{
//             posts.push(post);

//             const error = true;

//             if(!error){
//                 resolve();
//             }else{
//                 reject("Oops! Something went wrong.")
//             }
//         }, 2000);
//     })
// }

// this will resolve and append new post
function createPost(post){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            posts.push(post);

            const error = false;

            if(!error){
                resolve();
            }else{
                reject("Oops! Something went wrong.")
            }
        }, 1000);
    })
}

createPost(
    {title: 'Post Three', body: 'This is post three'})
    .then(getPosts)
    .catch(err => console.log(err));


// Promise.all

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject) =>{
    setTimeout(resolve, 1000, 'Good')
})
const promise4 = fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json());

Promise.all([promise1, promise2, promise3, promise4])
.then(values => 
    console.log(values)
);
