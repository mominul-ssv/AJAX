document.getElementById("btnajax").addEventListener("click", makeRequest)

function makeRequest() {

  const xhr = new XMLHttpRequest()
  xhr.open("GET", "data.txt", true)

  xhr.timeout = 2000; // 2000ms = 2s

  xhr.onloadstart = (e) => {
    console.log("Transaction has started...")
  }

  xhr.onprogress = (e) => {
    console.log("e.loaded : " + e.loaded)
    console.log("e.total : " + e.total)
  }

  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr)
      console.log(xhr.responseText)
    } else {
      console.log("Problem occurred!")
    }
  }

  xhr.onerror = (e) => {
    console.log("Network not available")
  }

  xhr.onloadend = (e) => {
    console.log("Transaction end.")
  }

  xhr.onabort = (e) => {
    console.log("Abort!")
  }

  xhr.ontimeout = () => {
    console.log("Timeout!")
  }

  xhr.send()
}

