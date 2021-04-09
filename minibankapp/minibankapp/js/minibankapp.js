/**
 * minibankapp.js
 */
"use strict";
$(function () {
  let currentRowId = 2;
  $("#formNewAccount").on("submit", (event) => {
    event.preventDefault();
    const txtAccountNo = $("#txtAccountNo").val();
    const txtCustomerName = $("#txtCustomerName").val();
    const ddlAccountType = $("#ddlAccountType").val();

    const tables = $("#tblAccounts");
    const newRecord = tables
      .find("tbody")
      .append(
        `<tr><td>${++currentRowId}</td><td>${txtAccountNo}</td><td>${txtCustomerName}</td><td>${ddlAccountType}</td></tr>`
      );
    tables.show().append(newRecord);
  });

  $("#savings_checkbox").change(function () {
    if ($(this).val() == "checked") {
      // ddlAccountType === '_Savings'
      $("tbody")
        .find("tr")
        .each(function () {
          let savacct = $(this).find("Savings");
          if (!savacct) {
            $(this).hide();
          }
          else{$(this).show()}
        });
    }
  });

//   $("#savings_checkbox").change(function(){
//     $(this).prop("checked").toggle(!this.checked); 
// });

});
