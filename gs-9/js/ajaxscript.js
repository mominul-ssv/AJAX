document.getElementById("btnajax").addEventListener("click", makeRequest)
let data = document.getElementById("data")

function makeRequest() {

  const xhr = new XMLHttpRequest()
  xhr.open("GET", "data.xml", true)

  // If specified, responseType must be empty string or "document"
  xhr.responseType = 'document';

  // Force the response to be parsed as XML
  // xhr.overrideMimeType('text/xml');

  xhr.onload = function () {
    if (xhr.status === 200) {

      let x = xhr.responseXML.getElementsByTagName("student")

      for (i = 0; i < x.length; i++) {
        data.innerHTML = data.innerHTML +
          "<p>" + x[i].getElementsByTagName("name")[0].childNodes[0].nodeValue + "</p>" +
          "<p>" + x[i].getElementsByTagName("roll")[0].childNodes[0].nodeValue + "</p>"
      }
    } else {
      console.log("Problem occurred!")
    }
  }

  xhr.send()
}
