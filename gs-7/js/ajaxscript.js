document.getElementById("btnajax").addEventListener("click", makeRequest)
let personName = document.getElementById("name-id")
let personRoll = document.getElementById("roll-id")

function makeRequest() {

  const xhr = new XMLHttpRequest()
  xhr.open("GET", "data.json", true)
  xhr.responseType = "json"

  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.response)
      console.log(xhr.response.name)
      console.log(xhr.response.roll)

      personName.innerText = xhr.response.name;
      personRoll.innerText = xhr.response.roll;
    } else {
      console.log("Problem occurred!")
    }
  }

  xhr.send()
}

// function makeRequest() {

//   const xhr = new XMLHttpRequest()
//   xhr.open("GET", "data.json", true)

//   xhr.onload = function () {
//     if (xhr.status === 200) {
//       console.log(xhr.response)
//       let obj = JSON.parse(xhr.response)
//       console.log(obj)
//       console.log(obj.name)
//       console.log(obj.roll)

//       personName.innerText = obj.name;
//       personRoll.innerText = obj.roll;
//     } else {
//       console.log("Problem occurred!")
//     }
//   }

//   xhr.send()
// }
