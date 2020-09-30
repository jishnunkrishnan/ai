$(document).ready(function(){
    $("#submit-form").validate({
        rules:{
            name:{
                required:true,
       
            },
            email:{
                required:true,
          
            },
            phone:{
                required:true,
                minlength:10
            },
            message:{
                required:true
            }
        } 
    })
})