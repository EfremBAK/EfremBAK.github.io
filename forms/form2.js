$(function(){
    $("#productForm").on("submit",
        event =>{
            event.preventDefault();
            const productNumber = $("#productNumber").val();
            const quantity = $("#quantity").val();
            const prodName = $("#prodName").val();
            const supplier = $("#supplier").val();
            const unitPrice = $("#unitPrice").val();
            const date = $("#date").val();
   
            const tables = $("#productTable");
            const newRecord = tables.find('tbody')
            .append( `<tr><td>${productNumber}</td><td>${prodName}</td><td>${quantity}</td>
            <td>${unitPrice}</td><td>${supplier}</td><td>${date}</td></tr>`);
            tables.show().append(newRecord);
              
        });
   });