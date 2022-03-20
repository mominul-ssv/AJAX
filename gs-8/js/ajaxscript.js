document.getElementById("btnajax").addEventListener("click", makeRequest)
let personName = document.getElementById("name-id")
let personRoll = document.getElementById("roll-id")
let personName2 = document.getElementById("name-id2")
let personRoll2 = document.getElementById("roll-id2")

function makeRequest() {

  const xhr = new XMLHttpRequest()
  xhr.open("GET", "data.xml", true)

  // If specified, responseType must be empty string or "document"
  xhr.responseType = 'document';

  // Force the response to be parsed as XML
  // xhr.overrideMimeType('text/xml');

  xhr.onload = function () {
    if (xhr.status === 200) {

      console.log(xhr.response)

      console.log(xhr.responseXML.getElementsByTagName("student"))

      console.log(xhr.responseXML
        .getElementsByTagName("student")[0])
      console.log(xhr.responseXML
        .getElementsByTagName("name")[0])
      console.log(xhr.responseXML
        .getElementsByTagName("roll")[0])
      console.log(xhr.responseXML
        .getElementsByTagName("name")[0].childNodes[0].nodeValue)
      console.log(xhr.responseXML
        .getElementsByTagName("roll")[0].childNodes[0].nodeValue)

      personName.innerText = xhr.responseXML
        .getElementsByTagName("name")[0].childNodes[0].nodeValue
      personRoll.innerText = xhr.responseXML
        .getElementsByTagName("roll")[0].childNodes[0].nodeValue

      console.log(xhr.responseXML
        .getElementsByTagName("student")[1])
      console.log(xhr.responseXML
        .getElementsByTagName("name")[1])
      console.log(xhr.responseXML
        .getElementsByTagName("roll")[1])
      console.log(xhr.responseXML
        .getElementsByTagName("name")[1].childNodes[0].nodeValue)
      console.log(xhr.responseXML
        .getElementsByTagName("roll")[1].childNodes[0].nodeValue)

      personName2.innerText = xhr.responseXML
        .getElementsByTagName("name")[1].childNodes[0].nodeValue
      personRoll2.innerText = xhr.responseXML
        .getElementsByTagName("roll")[1].childNodes[0].nodeValue
    } else {
      console.log("Problem occurred!")
    }
  }

  xhr.send()
}
