$(function(){
 $("#login").submit(
     function(evt){
         evt.preventDefault();
         const email = $("#email").val();
         const pass = $("#password").val();
         const url = $("#url").val();

         let newInput = `<tr><td>${email}</td><td>${password}</td><td>${url}</td></tr>`;
         $("data_display").append(newInput);
        //  console.log(email);
        //  console.log(pass);
        //  console.log(url);
     }
 );
}
);