// let namecheck=false
// let numcheck=false
// let mailcheck=false
// let passcheck=false

// $(document).ready(function(){
//     $("#editname").keypress(function(ev){
//         var keyName = ev.which;
//         let inp = this.value
//         let x = inp.length-1
        
//         if(!(keyName!=8 && (keyName<48 || keyName>57)) || (inp[x]==" " && keyName==32)){
//             ev.preventDefault();
//         }
//     })
//     $("#editname").keyup(function(){

//         var text=this.value;
//         var nameRegex = /^[A-Za-z ]+$/;
//         if(text.charCodeAt(0)==32){
//             namecheck=false;
//             $("#editnameerror").text("First character should not be a space")
//         }else if(!text.match(nameRegex)){
//             namecheck=false;
//             $("#editnameerror").text("Enter valid name")
//         }else if(text.length<3){
//             namecheck=false;
//             $("#editnameerror").text("Enter name with more than 2 character")
//         }else if(text.match(nameRegex)){
//             namecheck=true;
//             $("#editnameerror").text("")
//         }
//     })

//     $("#editphone").keypress(function(e){
//         var keyCode = e.which;
        
//         if(!(keyCode!=8 && !(keyCode<48 || keyCode>57)) || this.value.length==10){
//             e.preventDefault();
//         }
//     })
//     $("#editphone").keyup(function(){
//         var num=this.value;
//         var numRegex = /^[0-9]+$/;
//         if(num.length<10){
//             numcheck=false;
//             $("#editnumerror").text("Enter 10 digits")
//         }else if(num.match(numRegex) && num.length==10){
//             numcheck=true;
//             $("#editnumerror").text("")
//         }
//     })

//     $("#editmail").keypress(function(et){
//         var keyCode = et.which;
        
//         if(keyCode==32){
//             et.preventDefault();
//         }
//     })

//     $("#editmail").blur(function(){
//         var mail=this.value;
//         var mailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//         if(!mail.match(mailRegex)){
//             mailcheck=false;
//             $("#editmailerror").text("Invalid mail")
//         }else if(mail.match(mailRegex)){
//             mailcheck=true;
//             $("#editmailerror").text("")
//         }
//     })

// })

// $("#edit-form").submit((e)=>{
//     e.preventDefault()

//     if(namecheck==true && numcheck==true && mailcheck==true && passcheck==true){
//         $.ajax({
//             url:"",
//             data:$("#edit-form").serialize(),
//             method:"post",
//             success:function (response){
//                 alert("Form submitted successfully")
//                 location.replace("/admin")
//             },
//             error:function (err){
//                 alert("Something Error")

//             }
//         })
//     }else{
//         $("#sendediterror").text("Form not filled")
//     }
// })