

function emails() {
            var mailformat = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
            var x = document.getElementById("email").value;
            if (x == "") {
                document.getElementById("p4").innerHTML = "please enter email";
            }
            else if (!(mailformat.test(x))) {
                document.getElementById("p4").innerHTML = "please enter  perfect email";
            }
            else {
                document.getElementById("p4").innerHTML = "";
            }
        }
        ////////////////////////////////////////////////////////////
        function psws() {
            var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
            var x = document.getElementById("psw").value;
            if (x == "") {
                document.getElementById("p5").innerHTML = "please enter password";
            }
            else if (!x.match(pattern)) {
                document.getElementById("p5").innerHTML = "please enter password 8 characters includes uppercase special character and number";
            }
            else {
                document.getElementById("p5").innerHTML = "";
            }
        }

        function Login(){
            var data={};
            data.email=$('#email').val();
            data.psw=$('#pswrd').val();
        console.log("data",data);
        
            $.ajax({
              url: '/getdata',
              type: 'POST',
              data:data,
              dataType: "json",
               // mongod is expecting the parameter name to be called "jsonp"
              success: function (data1) {
                  debugger
                if(data1=="Invalid Email Id"){
                    $('#error').html(data1);
                    console.log(data1);
                 }else if(data1=="ENTER VALID DETAILS"){
                    $('#error').html(data1);
                    console.log(data1);
                 }
               else {
                window.sessionStorage.setItem("name", JSON.stringify(data1));
                window.location.replace("./home1.html");
               
               }              },
              error: function (XMLHttpRequest, textStatus, errorThrown) {
                console.log('error', errorThrown);
                //document.getElementById("p6").innerHTML = "Invalid EmailId";
              }
            });
          }
          

