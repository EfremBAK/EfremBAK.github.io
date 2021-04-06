"use strict";
window.onload = function () {
  let currentRowId = 2;
  const formNewAccount = document.querySelector("#consusForm");
  formNewAccount.addEventListener("submit", event => {
    event.preventDefault();
    const txtFullname = document.querySelector("#personalName").value;
    const txtcitizenId = document.querySelector("#citizenId").value;
    const txtssn = document.querySelector("#ssn").value;
    const txtstate = document.querySelector("#state").value;
    const txtsenior = document.querySelector('input[name="radioCitizen"]:checked').value;

    addNewPeopleData(txtFullname, txtcitizenId, txtssn, txtstate,txtsenior);
    txtFullname.value = "";
    txtcitizenId.value = "";
    txtssn.value = "";
    txtstate["selectedIndex"] = 0;
    txtsenior.value="";
    txtFullname.focus();
  });

  const addNewPeopleData = function (fullname, citizenId, ssn, state, senior) {
    const tableCansus = document.querySelector("#tblAccounts");
    const newRow = tableCansus.insertRow(-1);
    const newCellRowId = newRow.insertCell(0);
    const strNewRowId = document.createTextNode(`${++currentRowId}.`);
    newCellRowId.appendChild(strNewRowId);
    const newFullname = newRow.insertCell(1);
    const strnewFullname = document.createTextNode(`${fullname}`);
    newFullname.appendChild(strnewFullname);
    const newcitizenId = newRow.insertCell(2);
    const strcitizenId = document.createTextNode(`${citizenId}`);
    newcitizenId.appendChild(strcitizenId);
    const newssn = newRow.insertCell(3);
    const strnewssn = document.createTextNode(`${ssn}`);
    newssn.appendChild(strnewssn);
    const newstate = newRow.insertCell(4);
    const strnewstate = document.createTextNode(`${state}`);
    newstate.appendChild(strnewstate);
    const newsenior = newRow.insertCell(5);
    const strnewsenior = document.createTextNode(`${senior}`);
    newsenior.appendChild(strnewsenior);
  };
};