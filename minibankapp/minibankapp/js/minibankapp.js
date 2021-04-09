/**
 * minibankapp.js
 */
"use strict";
$( function() {
    let currentRowId = 2;
   $("#formNewAccount").on
  ("submit", 
        event => {
            event.preventDefault();
            const txtAccountNo = $("#txtAccountNo").val();
            const txtCustomerName = $("#txtCustomerName").val();
            const ddlAccountType =$("#ddlAccountType").val();
           
            const tables = $("#tblAccounts");
            const newRecord = tables.find('tbody')
            .append(`<tr><td>${++currentRowId}</td><td>${txtAccountNo}</td><td>${txtCustomerName}</td><td>${ddlAccountType}</td></tr>`);
            tables.show().append(newRecord);
           
    });

    
    $("#savings_checkbox").change(
        function() {
            if($(this).prop("checked") == true){
                $("tbody").find("tr").each(
                    function() {
                        let isSaving = $(this).find(".isSaving").html() === "Yes";
                        if(!isSaving) {
                            $(this).hide();
                        }
                    }
                );
            }
            else if($(this).prop("checked") == false){
                $("tbody").find("tr").each(
                    function() {
                        let isSaving = $(this).find(".isSaving").html() === "Yes";
                        if(!isSaving) {
                            $(this).show();
                        }
                    }
                );
            }
        }
    );
});