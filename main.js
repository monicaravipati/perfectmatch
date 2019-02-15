


$(function(){
	$.validator.setDefaults({
		highlight: function(element){
			$(element)
			.closest('.form-group')
			.addClass('has-error')
		},
		unhighlight: function(element){
			$(element)
			.closest('.form-group')
			.removeClass('has-error')
		}
	});
	
	$.validate({
		rules:
		{	
		    password: "required",
			birthDate: "required",
			weight: {
			    required:true,
			    number:true
			},
			height:  {
			    required:true,
			    number:true
			},
			email: {
				required: true,
				email: true
			}
		},
			messages:{			
				email: {
				required: true,
				email: true
			}
		},
				password: {
					required: " Please enter password"
				},
				birthDate: {
					required: " Please enter birthdate"
				},
				email: {
					required: ' Please enter email',
					email: ' Please enter valid email'
				},
				weight: {
					required: " Please enter your weight",
					number: " Only numbers allowed"
				},
				height: {
					required: " Please enter your height",
					number: " Only numbers allowed"
				},
			}
			
	)
});
function firstname()
{
	var alphaExp = /^[a-zA-Z ]*$/;
	var y=document.getElementById("firstName").value;
	if(y=="")
	{
	  document.getElementById("p2").innerHTML="please enter first name";
	}
   
	else if(!(alphaExp.test(y)))
	{
		document.getElementById("p2").innerHTML="please enter first name only alphabets"; 
	}
	else
	{
		document.getElementById("p2").innerHTML="";
	}
}
function Lastname()
    {
        var alphaExp = /^[a-zA-Z ]*$/;
        var x=document.getElementById("lName").value;
        if(x=="")
        {
          document.getElementById("p3").innerHTML="please enter last name";
        }
        else if(!(alphaExp.test(x)))
        {
            document.getElementById("p3").innerHTML="please enter last name only alphabets"; 
        }
		else
		{
            document.getElementById("p3").innerHTML="";
        }
	}
	function Email()
    {
        var mailformat = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
        var x=document.getElementById("email").value;
        if(x=="")
        {
          document.getElementById("p4").innerHTML="please enter email";
        }
        else if(!(mailformat.test(x)))
        {
            document.getElementById("p4").innerHTML="please enter  perfect email";
        }
        else{
            document.getElementById("p4").innerHTML="";
        }
	}
	function pwd()
    { 
        var pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
        var x=document.getElementById("pswrd").value;
        if(x=="")
        {
          document.getElementById("p5").innerHTML="please enter password";
        }
        else if(!x.match(pattern))
        {
            document.getElementById("p5").innerHTML="please enter password 8 characters includes uppercase special character and number";
        }
        else{
            document.getElementById("p5").innerHTML="";
        }
	}
	function Cpwd()
    {
        var pattern=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
        var x=document.getElementById("pswrd").value;
        var y=document.getElementById("cpwd").value;
        if(x=="")
        {
          document.getElementById("p6").innerHTML="please enter re password";
        }
        else if(!x.match(pattern))
        {
            document.getElementById("p6").innerHTML="please enter password 8 characters includes uppercase special character and number";
        }
        else if(x!=y)
        {
            document.getElementById("p6").innerHTML="password not matches";
        }
        else{
            document.getElementById("p6").innerHTML="";
        }
	}
	function Dob()
    {
        var x=document.getElementById("birth").value;
        if(x=="")
        {
          document.getElementById("p7").innerHTML="please enter dob";
        }
        else{
            document.getElementById("p7").innerHTML="";
        }
	}
	function pnum()
	
	{
	  var phoneno =/^\d{10}$/;
	  var x=document.getElementById("phoneNumber").value;
	  if(x=="")
	  {
		document.getElementById("p8").innerHTML="please enter PHONENUMBER";
	  }
	  else if(!(phoneno.test(x)))
	  {
		  document.getElementById("p8").innerHTML="please enter valid contact"; 
	  }
	  else
	  {
		  document.getElementById("p8").innerHTML="";
	  }
  }
	function Height(){
		// var height=/^[2-9]' ?(?:\d|1[0-1])"?$/;
		var height=/^[0-9]+ ?(\'|ft|cm|meters|feet|in|inches|\")?( *[1-9]+ ?(\"|inches|in|cm)?)?$/;
		// console.log("11111",height);
		// var height=/^(d+)('|")(?:([0-12]+)(?!2)")?$/;
		var x=document.getElementById("heigh").value;
		if(x=="")
		{
			document.getElementById("p9").innerHTML="please enter HEIGHT";	
		}
		else if(!(height.test(x)))
	  {
		  document.getElementById("p9").innerHTML="please enter a valid height"; 
	  }
	  else
	  {
		  document.getElementById("p9").innerHTML="";
	  }

	}	
	
	function Weight(){
		
		
		//  var weightt=/^\d{2,3} ?kg$/;
		var x=document.getElementById("weight").value;
		if(x=="")
		{
			document.getElementById("p0").innerHTML="please enter WEIGHT";	
		}
	// 	else if(!(weightt.test(x)))
	//   {
	// 	  document.getElementById("p0").innerHTML="please enter a valid weight"; 
	//   }
	  else
	  {
		  document.getElementById("p0").innerHTML="";
	  }
	}

	function Hobbies()
    {
        var x=document.getElementById("hobbies").value;
        if(x=="")
        {
          document.getElementById("hai").innerHTML="please enter your hobbies";
        }
        else{
            document.getElementById("hai").innerHTML="";
        }
	}
	
	function Photo()
    {
        var x=document.getElementById("photo");
        if(x=="")
        {
          document.getElementById("hi").innerHTML="please upload your photo";
        }
        else{
            document.getElementById("hi").innerHTML="";
        }
	}
	function Address()
    {
        var x=document.getElementById("address").value;
        if(x=="")
        {
          document.getElementById("hye").innerHTML="please enter your address";
        }
        else{
            document.getElementById("hye").innerHTML="";
        }
	}
//Convert Image to Base64
$(document).ready(function() {
	$("#inputFileToLoad").change(function() {
			var filesSelected = document.getElementById("inputFileToLoad").files;
			if (filesSelected.length > 0) {
					var fileToLoad = filesSelected[0];
					var fileReader = new FileReader();
					fileReader.onload = function(fileLoadedEvent) {
							var base64value = fileLoadedEvent.target.result;
							console.log(base64value);
							$("#response").val(base64value);
					};
					fileReader.readAsDataURL(fileToLoad);
			}
	});
});
	function reg()
	{
            
    var data={};
    data.fname=$('#firstName').val();
    data.lname=$('#lName').val();
    data.email=$('#email').val();
    data.cpsw=$('#cpwd').val();
    data.psw=$('#pswrd').val();
		data.dob=$('#birth').val();
		data.phonenumber=$('#phoneNumber').val();
		data.height=$('#heigh').val();
		data.weight=$('#weight').val();
		data.hobbies=$('#hobbies').val();
		data.photo = $('#response').val();
    data.address=$('#address').val();
    if ((g1.checked == false)) {
                data.gender="female";
            }
            else{
                data.gender="male";
            }
						console.log(data);   

						
						
						
    $.ajax({
        type: "POST",
        url: "/savedata",
        data: data,
        success: function(res){
           // console.log(res);
        }
      })
 

   
}
 