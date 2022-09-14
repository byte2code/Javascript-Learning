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
        document.body.innerHTML += output;
    }, 1000);
}

function createPost(post){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            posts.push(post);

            const error = false;
            if(!error){
                resolve();
            } else{
                reject("Ooops! There's an error.")
            }
        }, 2000);
    })
}


async function init(){
   await createPost({title: 'Post Three', body: 'This is post three'});

   getPosts();
}

init();

async function fetchUsers(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');

    const data = await res.json();

    console.log(data);
}

fetchUsers();