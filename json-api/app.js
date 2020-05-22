// Variables
  const btnLoadPosts = document.getElementById('cargar')
  const postsContainer = document.getElementById('listado')
  const API_URL = `https://jsonplaceholder.typicode.com/posts`


// Listeners
btnLoadPosts.addEventListener('click', getPosts)


// Functions
function getPosts() {
  const xhr = new XMLHttpRequest()

  xhr.open('GET', API_URL, true)

  xhr.onload = function() {
    const posts = JSON.parse(this.responseText);
    let content = '';
    posts.forEach(post => {
      content += templatePost(post);
    })
    postsContainer.innerHTML = content;
  }

  xhr.send()
}

function templatePost(post) {
  return `
    <div>
      <h3>${post.title}</h3>
      <p>${post.body}</p>
    </div>
  `;
}