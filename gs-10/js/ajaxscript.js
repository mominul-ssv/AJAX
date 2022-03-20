document.getElementById("btnajax").addEventListener("click", makeRequest)
let title = document.getElementById("title")
let body = document.getElementById("body")

function makeRequest() {

  const xhr = new XMLHttpRequest()
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts/1", true)
  xhr.responseType = "json"

  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.response)
      console.log(xhr.response.userId)
      console.log(xhr.response.id)
      console.log(xhr.response.title)
      console.log(xhr.response.body)
      title.innerText = xhr.response.title
      body.innerText = xhr.response.body
    } else {
      console.log("Problem occurred!")
    }
  }

  xhr.send()
}
