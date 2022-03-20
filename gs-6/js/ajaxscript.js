document.getElementById("btnajax").addEventListener("click", makeRequest)
let dt = document.getElementById("data")

function makeRequest() {

  const xhr = new XMLHttpRequest()
  xhr.open("GET", "data.txt", true)

  xhr.onload = function () {
    if (xhr.status === 200) {
      // console.log(xhr.responseText)
      dt.innerText = xhr.responseText
    } else {
      console.log("Problem occurred!")
    }
  }

  xhr.send()
}

