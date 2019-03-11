// var video = document.getElementById("myVideo");
////////////////////////////////////// LOGIN VALIDATIONS//////////////////////////////////////////
function emails() {
    var mailformat = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
    var x = $("#email").val();
    if (x == "") {
        $("#p4").html("please enter email");
    }
    else if (!(mailformat.test(x))) {
        $("#p4").html("please enter  perfect email");
    }
    else {
        $("#p4").html("");
    }
}
////////////////////////////////////////////////////////////
function psws() {
    var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
    var x = $("#pswrd").val();
    if (x == "") {
        $("#p5").html("please enter password");
    }
    else if (!x.match(pattern)) {
        $("#p5").html("please enter password 8 characters includes uppercase special character and number");
    }
    else {
        $("#p5").html("");
    }
}
//////////////////////LOGIN DATA////////////////////////////
function Login() {
    var data = {};
    data.email = $('#email').val();
    data.psw = $('#pswrd').val();
    console.log("data", data);
    var url = '/getdata',
        type = 'POST',
        data = data,
        dataType = 'json',
        page = 'login';
    services(url, type, data, dataType, page);
}
// $.ajax({
//     url: '/getdata',
//     type: 'POST',
//     data: data,
//     dataType: "json",
//     // mongod is expecting the parameter name to be called "jsonp"
//     success: function (data1) {
//         console.log(data1)
//         //debugger
//         if (data1 == "Invalid Email Id") {
//             $('#error').html(data1);
//             console.log(data1);
//         } else if (data1 == "ENTER VALID DETAILS") {
//             $('#error').html(data1);
//             console.log(data1);
//         }
//         else {
//             window.sessionStorage.setItem("name", JSON.stringify(data1));
//             window.location.href = "/home1.html";

//         }
//     },

//     error: function (XMLHttpRequest, textStatus, errorThrown) {
//         console.log('error', errorThrown);
//         //document.getElementById("p6").innerHTML = "Invalid EmailId";
//     }
// });
//           }


///////////////////////////////////////admin login validation////////////////////////////

      
function adminLog(){
    var data={};
    data.username=$('#username').val();
    data.password=$('#password').val();
    console.log("data",data);
    var url = '/adminlogin',
    type = 'POST',
    data = data,
    dataType = 'json',
    page = 'adminlogin';
services(url, type, data, dataType, page);

  }
