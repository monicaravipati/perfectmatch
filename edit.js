
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
        var x=document.getElementById("photo").value;
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
	debugger
	var data=JSON.parse(window.sessionStorage.getItem('name'));
	console.log("data",data[0].fname);
	function loaded(){
	$('#firstName').val(data[0].fname);
	$('#lName').val(data[0].lname);
	$('#email').val(data[0].email);
	$('#pswrd').val(data[0].psw);
	$('#cpwd').val(data[0].cpsw);
	$('#birth').val(data[0].dob);
	$('#phoneNumber').val(data[0].phonenumber);
	$('#heigh').val(data[0].height);
	$('#weight').val(data[0].weight);
	$('#hobbies').val(data[0].hobbies);
	$('#address').val(data[0].address);
	$('#photo').val(data[0].photo);
}
	function update(){
  
		var data1={};
		data1.firstName= $('#fname').val();
		data1.lName= $('#lname').val();
		data1.email=$('#email').val();
		data1.pswrd=$('#psw').val();
		data1.cpwd=$('#cpsw').val();
		data1.birth=$('#dob').val();
		data1.phoneNumber= $('#phonenumber').val();
		data1.heigh=$('#height').val();
		data1.weight=$('#weight').val();
		data1.hobbies=$('#hobbies').val();
		data1.address=$('#address').val();
		data1.photo=$('#photo').val();
	
		$.ajax({
					type: "POST",
					url: "/update",
					data: data,
					dataType:"JSON",
					success: function (res) {
							console.log("update",res);
							if(res.success == true){ // if true (1)
							setTimeout(function(){// wait for 5 secs(2)
							location.reload(); // then reload the page.(3)
				}, 1000); 
		 }     
					}
			
			})
		window.location.replace("./home.html")
	}
	function deletedb(){
		debugger
		var data1= {}; 
		data.id = data.email; 
		$.ajax({
			 url: "/delete", 
			 type: "PUT", 
			 data: data, 
			 dataType: "JSON",
			 success: function (data1) {
					console.log('success', data1);
					alert(data1);
				}, 
				error: function (XMLHttpRequest, textStatus, errorThrown) { 
					console.log('error', errorThrown); 
					 }
				});
				window.location.replace("./home.html");
	}

	// function mydgtata(){
	// 	var x={};
	// 	x.Mail=data.email;
	// 	$.ajax({
	// 				type: 'GET',
	// 				url: '/print',
	// 				data: x,
	// 				dataType:  'json',
	// 				success: function(req){ 
	// 						 console.log("hello",req);
	// 					 $('#firstName').val(req[0].fname);
	// 					 $('#lName').val(req[0].lname);
	// 					 $('#email').val(req[0].email);
	// 					 $('#pswrd').val(req[0].psw);
	// 					 $('#cpwd').val(req[0].cpsw);
	// 					 $('#birth').val(req[0].dob);
	// 					 $('#phoneNumber').val(req[0].phonenumber);
	// 					 $('#heigh').val(req[0].height);
	// 					 $('#weight').val(req[0].weight);
	// 					 $('#hobbies').val(req[0].hobbies);
	// 					 $('#address').val(req[0].address);
	// 					 $('#photo').val(req[0].photo);
	// 				 }
	// 			})
	// }