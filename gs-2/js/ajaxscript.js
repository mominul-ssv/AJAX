document.getElementById("btnajax").addEventListener("click", makeRequest)

function makeRequest() {

  const xhr = new XMLHttpRequest()

  if (xhr.readyState === 0) {
    console.log("Open Method : Not Yet Called 0")
    // Do Something...
  }

  xhr.open("GET", "data.txt", true)

  if (xhr.readyState === 1) {
    console.log("Open Method : Called 1")
    // Do Something...
  }

  xhr.onreadystatechange = function () {

    if (xhr.readyState === 2) {
      console.log("Response Header 2")
      // Do Something...
    }
    if (xhr.readyState === 3) {
      console.log("Loading... 3")
      // Do Something...
    }
    if (xhr.readyState === 4) {
      console.log("Done 4")
      // Handled Below.
    }

    // if XMLHttpRequest.DONE = xhr.readyState = 4, then go inside the if-else block
    if (xhr.readyState === XMLHttpRequest.DONE) {

      if (xhr.status === 200) {
        console.log(xhr)
        console.log(xhr.responseText)
      } else {
        console.log("Error Occurred")
      }
    }
  }

  xhr.send()
}

function makeRequestOld() {

  const xhr = new XMLHttpRequest()

  console.log("Before open(): ", xhr.readyState) // 0

  xhr.open("GET", "data.txt", true)

  console.log("After open(): ", xhr.readyState) // 1

  xhr.onreadystatechange = function () {

    console.log("Final: ", xhr.readyState) // 2, 3, 4

    // if XMLHttpRequest.DONE = xhr.readyState = 4, then go inside the if-else block
    if (xhr.readyState === XMLHttpRequest.DONE) {

      if (xhr.status === 200) {
        console.log(xhr)
        console.log(xhr.responseText)
      } else {
        console.log("Error Occured")
      }
    }
  }

  xhr.send()
}

/*
==================================================================================
const x = myFunction(4, 3);   // Function is called, return value will end up in x

function myFunction(a, b) {
  return a * b;               // Function returns the product of a and b
}

x();
==================================================================================
const x = function(a, b) {
  return a * b;
}

x(3, 4);
==================================================================================
 */