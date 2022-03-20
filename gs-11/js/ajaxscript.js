document.getElementById("btnajax").addEventListener("click", makeRequest)

function makeRequest() {

  const xhr = new XMLHttpRequest()
  xhr.open("GET", "https://jsonplaceholder.typicode.com/posts", true)
  xhr.responseType = "json"

  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.response)
      const x = xhr.response
      for (i = 0; i < x.length; i++) {
        console.log(x[i].userId)
        console.log(x[i].id)
        console.log(x[i].title)
        console.log(x[i].body)
      }
    } else {
      console.log("Problem occurred!")
    }
  }

  xhr.send()
}
