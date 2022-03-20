document.getElementById("btnajax").addEventListener("click", makeRequest)

function makeRequest() {

  const xhr = new XMLHttpRequest()
  xhr.open("POST", "http://dummy.restapiexample.com/api/v1/create", true)
  xhr.responseType = "json"

  xhr.onload = function () {
    if (xhr.status === 200) {
      console.log(xhr.response)
      document.getElementById("info").innerText = "Data Inserted"
    } else {
      console.log("Problem occurred!")
    }
  }

  let myData = '{"name": "test", "salary": "123", "age": "25"}'
  xhr.send(myData)
}
