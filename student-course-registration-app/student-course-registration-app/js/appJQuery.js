/**
 * app.js
 */
 "use strict";
 $( function () {
   let currentRowId = 2;
   $("#formCourseReg").on("submit", (event) => {
     event.preventDefault();
     const txttudentId = $("#txtStudentId").val();
     const txtFullName = $("#txtFullName").val();
     const txtcourse = $("#txtcourse").val();

    const tables = $("#tblRegistrations");

    const newRecord = tables.find('tbody')
    .append(`<tr><td>${++currentRowId}</td><td>${txttudentId}</td><td>${txtFullName}</td><td>${txtcourse}</td></tr>`);
   tables.show().append(newRecord);


    // const addNewRegistrationDataRow = function (studentId, fullName, course) {
    //  const tblRegistrations = document.querySelector("#tblRegistrations");
    //  const newRow = tblRegistrations.insertRow(-1);
    //  const newCellRowId = newRow.insertCell(0);
    //  const strNewRowId = document.createTextNode(`${++currentRowId}.`);
    //  newCellRowId.appendChild(strNewRowId);
//      const newCellStudentId = newRow.insertCell(1);
//      const strNewRowStudentId = document.createTextNode(`${studentId}`);
//      newCellStudentId.appendChild(strNewRowStudentId);
//      const newCellFullName = newRow.insertCell(2);
//      const strNewRowFullName = document.createTextNode(`${fullName}`);
//      newCellFullName.appendChild(strNewRowFullName);
//      const newcourse = newRow.insertCell(3);
//      const strcourse = document.createTextNode(`${course}`);
//      newcourse.appendChild(strcourse);
//    };
 });
});