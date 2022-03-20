// ================================ READ ================================ //
// Ajax request for retrieving data
let tbody = document.getElementById("tbody");

function showData() {
  // Clear out the tbody contents
  tbody.innerHTML = "";

  // Creating xhr object
  const xhr = new XMLHttpRequest();

  // Initialize ("true" means asynchronous request)
  xhr.open("GET", "retrieve.php", true);

  xhr.responseType = "json";

  // Handle response
  xhr.onload = function () {
    if (xhr.status === 200) {
      if (xhr.response) {
        x = xhr.response;
      } else {
        x = "";
      }
      for (i = 0; i < x.length; i++) {
        tbody.innerHTML +=
          "<tr>" +

          "<td>" + x[i].id + "</td>" +
          "<td>" + x[i].name + "</td>" +
          "<td>" + x[i].email + "</td>" +
          "<td>" + x[i].password + "</td>" +

          "<td>" +
          "<button class='btn btn-warning btn-sm btn-edit' data-sid=" + x[i].id + ">Edit</button>" +
          "</td>" +

          "<td>" +
          "<button class='btn btn-danger btn-sm btn-del' data-sid=" + x[i].id + ">Delete</button>" +
          "</td>" +

          "</tr>";
      }
    } else {
      console.log("Problem Occurred!");
    }
    studentDelete();
    studentEdit();
  };
  xhr.send();
}
showData();

// ================================ CREATE ================================ //
// Ajax request for insert data
document.getElementById("addBtnId").addEventListener("click", addStudent);

function addStudent(e) {

  e.preventDefault();

  let sid = document.getElementById("studentId").value;
  let nm = document.getElementById("nameId").value;
  let em = document.getElementById("emailId").value;
  let pw = document.getElementById("passwordId").value;

  // Creating xhr object
  const xhr = new XMLHttpRequest();

  // Initialize ("true" means asynchronous request)
  xhr.open("POST", "insert.php", true);

  // Set request header
  xhr.setRequestHeader("Content-Type", "application/json");

  // Handle response
  xhr.onload = function () {
    if (xhr.status === 200) {

      // Response handling code
      document.getElementById("msgId").innerHTML =
        "<div class='alert alert-dark mt-3' role='alert'>" +
        xhr.responseText +
        "</div>";

      document.getElementById("formId").reset();
      showData();
    } else {
      console.log("Problem Occurred!");
    }
  };

  // JavaScript object
  const myData = { id: sid, name: nm, email: em, password: pw };

  // Converts JavaScript objects to JSON string 
  const data = JSON.stringify(myData);

  // Send request with data
  xhr.send(data);
}

// ================================ DELETE ================================ //
// Ajax call for delete data
function studentDelete() {
  let x = document.getElementsByClassName("btn-del");
  // console.log(x)
  // console.log(x.length)

  for (let i = 0; i < x.length; i++) {
    x[i].addEventListener("click", function () {

      id = x[i].getAttribute("data-sid");

      const xhr = new XMLHttpRequest();

      xhr.open("POST", "delete.php", true);

      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onload = function () {
        if (xhr.status === 200) {

          // Response handling code
          document.getElementById("msgId").innerHTML =
            "<div class='alert alert-dark mt-3' role='alert'>" +
            xhr.responseText +
            "</div>";

          showData();
        } else {
          console.log("Problem Occurred!");
        }
      };

      const myData = { sid: id };
      const data = JSON.stringify(myData);
      xhr.send(data);
    });
  }
}

// ================================ UPDATE ================================ //
// Ajax call for edit record
function studentEdit() {
  let x = document.getElementsByClassName("btn-edit");
  let sid = document.getElementById("studentId");
  let nm = document.getElementById("nameId");
  let em = document.getElementById("emailId");
  let pw = document.getElementById("passwordId");
  // console.log(x)
  // console.log(x.length)

  for (let i = 0; i < x.length; i++) {

    x[i].addEventListener("click", function () {

      id = x[i].getAttribute("data-sid");

      const xhr = new XMLHttpRequest();

      xhr.open("POST", "edit.php", true);

      xhr.responseType = "json";

      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onload = function () {
        if (xhr.status === 200) {
          // Response handling code
          a = xhr.response;
          sid.value = a.id;
          nm.value = a.name;
          em.value = a.email;
          pw.value = a.password;
        } else {
          console.log("Problem Occurred!");
        }
      };

      const myData = { sid: id };
      const data = JSON.stringify(myData);
      xhr.send(data);
    });
  }
}