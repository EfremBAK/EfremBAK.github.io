"use strict"

$(function(){
 $("#login").on("submit",
     event =>{
         event.preventDefault();
         const email = $("#email").val();
         const pass = $("#password").val();
         const url = $("#url").val();

        //  const tables = $("#tbls");
        //  const newRecord = tables.find('tbody')
        //  .append( `<tr><td>${email}</td><td>${password}</td><td>${url}</td></tr>`);
        //  tables.show().append(newRecord);
        
         console.log(` email: ${email}, password: ${pass}, url:${url}`);

     });
});