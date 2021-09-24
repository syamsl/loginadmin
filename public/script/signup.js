// var signnamecheck=false
// var signnumcheck=false
// var signmailcheck=false
// var signpasscheck=false

// $(document).ready(function(){
//     $("#signupname").keypress(function(ev){
//         var keyName = ev.which;
//         let inp = this.value
//         let x = inp.length-1
        
//         if(!(keyName!=8 && (keyName<48 || keyName>57)) || (inp[x]==" " && keyName==32)){
//             ev.preventDefault();
//         }
//     })
//     $("#signupname").keyup(function(){

//         var text=this.value;
//         var nameRegex = /^[A-Za-z ]+$/;
//         if(text.charCodeAt(0)==32){
//             signnamecheck=false;
//             $("#signnameerror").text("First character should not be a space")
//         }else if(!text.match(nameRegex)){
//             signnamecheck=false;
//             $("#signnameerror").text("Enter valid name")
//         }else if(text.length<3){
//             signnamecheck=false;
//             $("#signnameerror").text("Enter name with more than 2 character")
//         }else if(text.match(nameRegex)){
//             signnamecheck=true;
//             $("#signnameerror").text("")
//         }
//     })

//     $("#signphone").keypress(function(e){
//         var keyCode = e.which;
        
//         if(!(keyCode!=8 && !(keyCode<48 || keyCode>57)) || this.value.length==10){
//             e.preventDefault();
//         }
//     })
//     $("#signphone").keyup(function(){
//         var num=this.value;
//         var numRegex = /^[0-9]+$/;
//         if(num.length<10){
//             signnumcheck=false;
//             $("#signnumerror").text("Enter 10 digits")
//         }else if(num.match(numRegex) && num.length==10){
//             signnumcheck=true;
//             $("#signnumerror").text("")
//         }
//     })

//     $("#signmail").keypress(function(et){
//         var keyCode = et.which;
        
//         if(keyCode==32){
//             et.preventDefault();
//         }
//     })

//     $("#signmail").blur(function(){
//         var mail=this.value;
//         var mailRegex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
//         if(!mail.match(mailRegex)){
//             signmailcheck=false;
//             $("#signmailerror").text("Invalid mail")
//         }else if(mail.match(mailRegex)){
//             signmailcheck=true;
//             $("#signmailerror").text("")
//         }
//     })

//     $("#signpass").keyup(function(){
//         var pass = this.value;
//         console.log('pass');
//         if(pass.length<4){
//             signpasscheck=false;
//             $("#signpasserror").text("Password characters should be more than 3")
//         }else{
//             signpasscheck=true;
//             $("#signpasserror").text("")
//         }
//     })
// })

// $("#sign-up").submit((e)=>{
//     e.preventDefault()

//     if(signnamecheck==true && signnumcheck==true && signmailcheck==true && signpasscheck==true){
//         $.ajax({
//             url:"",
//             data:$("#sign-up").serialize(),
//             method:"post",
//             success:function (response){
//                 alert("Form submitted successfully")
//                 location.replace("/")
//             },
//             error:function (err){
//                 alert("Something Error")

//             }
//         })
//     }else{
//         $("#sendsignrror").text("Form not filled")
//     }
// })

