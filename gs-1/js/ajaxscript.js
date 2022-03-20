document.getElementById("btnajax").addEventListener("click", makeRequest)

function makeRequest() {

  const xhr = new XMLHttpRequest()
  xhr.open("GET", "data.txt", true)

  xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) {
        console.log(xhr)
        console.log(xhr.responseText)
      } else {
        console.log("Error Occurred!")
      }
    }
  }

  xhr.send()
}

