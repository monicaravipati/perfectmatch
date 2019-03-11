/////////////////////VALIDATIONS FOR FEILDS IN UPDATE FORM//////////////////////////////
function firstnamee() {
	var alphaExp = /^[a-zA-Z ]*$/;
	var y = $("firstName").val();
	if (y == "") {
		$("p2").html("please enter first name");
	}else if (!(alphaExp.test(y))) {
		$("p2").html("please enter first name only alphabets");
	}else {
		$("p2").html("");
	}
}
function Lastname() {
	var alphaExp = /^[a-zA-Z ]*$/;
	var x = $("lName").val();
	if (x == "") {
		$("p3").html("please enter last name");
	}
	else if (!(alphaExp.test(x))) {
		$("p3").html("please enter last name only alphabets");
	}
	else {
		$("p3").html("");
	}
}
function Email() {
	var mailformat = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
	var x = $("email").val();
	if (x == "") {
		$("p4").html("please enter email");
	}
	else if (!(mailformat.test(x))) {
		$("p4").html("please enter  perfect email");
	}
	else {
		$("p4").html("");
	}
}
function pwd() {
	var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
	var x = $("pswrd").val();
	if (x == "") {
		$("p5").html("please enter password");
	}
	else if (!x.match(pattern)) {
		$("p5").html("please enter password 8 characters includes uppercase special character and number");
	}
	else {
		$("p5").html("");
	}
}
function Cpwd() {
	var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
	var x = $("pswrd").val();
	var y = $("cpwd").val();
	if (x == "") {
		$("p6").html("please enter re password");
	}
	else if (!x.match(pattern)) {
		$("p6").html("please enter password 8 characters includes uppercase special character and number");
	}
	else if (x != y) {
		$("p6").html("password not matches");
	}
	else {
		$("p6").html("");
	}
}
function Dob() {
	var x = $("birth").val();
	if (x == "") {
		$("p7").html("please enter dob");
	}
	else {
		$("p7").html("");
	}
}
function pnum() {
	var phoneno = /^\d{10}$/;
	var x = $("phoneNumber").val();
	if (x == "") {
		$("p8").html("please enter PHONENUMBER");
	}
	else if (!(phoneno.test(x))) {
		$("p8").html("please enter valid contact");
	}
	else {
		$("p8").html("");
	}
}
function Height() {
	// var height=/^[2-9]' ?(?:\d|1[0-1])"?$/;
	var height = /^[0-9]+ ?(\'|ft|cm|meters|feet|in|inches|\")?( *[1-9]+ ?(\"|inches|in|cm)?)?$/;
	// console.log("11111",height);
	// var height=/^(d+)('|")(?:([0-12]+)(?!2)")?$/;
	var x = $("heigh").val();
	if (x == "") {
		$("p9").html("please enter HEIGHT");
	}
	else if (!(height.test(x))) {
		$("p9").html("please enter a valid height");
	}
	else {
		$("p9").html("");
	}
}
function Weight() {
	//  var weightt=/^\d{2,3} ?kg$/;
	var x = $("weight").val();
	if (x == "") {
		$("p0").html("please enter WEIGHT");
	}
	// 	else if(!(weightt.test(x)))
	//   {
	// 	  document.getElementById("p0").innerHTML="please enter a valid weight"; 
	//   }
	else {
		$("p0").html("");
	}
}
function Hobbies() {
	var x = $("hobbies").val();
	if (x == "") {
		$("hai").html("please enter your hobbies");
	}
	else {
		$("hai").html("");
	}
}
// function Photo() {
// 	var x = $("photo").val();
// 	if (x == "") {
// 		$("hi").html("please upload your photo");
// 	}
// 	else {
// 		$("hi").html("");
// 	}
// }
function Address() {
	var x = $("address").val();
	if (x == "") {
		$("hye").html("please enter your address");
	}
	else {
		$("hye").html("");
	}
}
///////////////////////////////////PRINTING THE PROFILE DATA /////////////////////////////////////////
debugger
var data = JSON.parse(window.sessionStorage.getItem('name'));
console.log("data", data[0].fname);
function loaded() {

	$('#firstName').val(data[0].fname);
	$('#lName').val(data[0].lname);
	$('#email').val(data[0].email);
	// $('#pswrd').val(data[0].psw);
	// $('#cpwd').val(data[0].cpsw);
	$('#birth').val(data[0].dob);
	$('#phoneNumber').val(data[0].phoneNumber);
	$('#heigh').val(data[0].height);
	$('#weight').val(data[0].weight);
	$('#hobbies').val(data[0].hobbies);
	$('#address').val(data[0].address);
	// $('#photo').val(data[0].photo);
	$('#qualification').val(data[0].qualification);
	$('#profession').val(data[0].profession);
	$('#working').val(data[0].working);
	$('#salary').val(data[0].salary);
	$('#religion').val(data[0].Religion);
	$('#language').val(data[0].language);
	$('#zodiac').val(data[0].zodiac);
}
//////////////////////UPDATE FUNCTIONALITY/////////////////////////
function update() {
	var data1 = {};
	data1.firstName = $('#firstName').val();
	data1.lName = $('#lName').val();
	// data1.email=$('#email').val();
	// data1.pswrd=$('#pswrd').val();
	data1.cpwd = $('#cpwd').val();
	data1.birth = $('#birth').val();
	data1.phoneNumber = $('#phoneNumber').val();
	data1.heigh = $('#heigh').val();
	data1.weight = $('#weight').val();
	data1.hobbies = $('#hobbies').val();
	data1.address = $('#address').val();
	// data1.photo=$('#photo').val();
	data1.qualification = $('#qualification').val();
	data1.profession = $('#profession').val();
	data1.working = $('#working').val();
	data1.salary = $('#salary').val();
	data1.Religion = $('#Religion').val();
	data1.language = $('#language').val();
	data1.zodiac = $('#zodiac').val();
	debugger;
	$.ajax({
		type: "POST",
		url: "/updating",
		data: data1,
		dataType: "JSON",
		success: function (res) {
			console.log("update", res);
			if (res.success == true) { // if true (1)
				setTimeout(function () {// wait for 5 secs(2)
					location.reload(); // then reload the page.(3)
				}, 1000);
			}
		}
})
// 	window.location.replace("./home1.html");
 }
 //////////////////////////PRINTING THE DATA AFTER UPDATION/////////////////////
function mydata() {
	debugger
	var x = {};
	x.Mail = data[0].email;
	$.ajax({
		type: 'GET',
		url: '/print',
		data: x,
		dataType: 'json',
		success: function (data) {
			debugger
			console.log("hello", data);
			$('#firstName').val(data[0] && data[0].fname);
			$('#lName').val(data[0].lname);
			$('#email').val(data[0].email);
			//  $('#pswrd').val(data[0].psw);
			//  $('#cpwd').val(data[0].cpsw);
			$('#birth').val(data[0].dob);
			$('#phoneNumber').val(data[0].phoneNumber);
			$('#heigh').val(data[0].height);
			$('#weight').val(data[0].weight);
			$('#hobbies').val(data[0].hobbies);
			$('#address').val(data[0].address);
			//  $('#photo').val(data[0].photo);
			$('#qualification').val(data[0].qualification);
			$('#profession').val(data[0].profession);
			$('#working').val(data[0].working);
			$('#salary').val(data[0].salary);
			$('#Religion').val(data[0].Religion);
			$('#language').val(data[0].language);
			$('#zodiac').val(data[0].zodiac);
			//alert($("#response").val());
			//$('preview').setAttribute('src', $("#response").val());
			//$("#preview").show();
			//$("#img").append('<img src=' + $("#response").val() + '></img>')
			console.log(data[0].photo.length);

		}
	})
}
////////////////////////////////DELETION FUNCTIONALITY FOR PROFILES////////////////////////
function deletedb() {
	debugger
	var y = {};
	y.Mail = data.email;
	console.log(data)
	$.ajax({
		url: "/del/" + data[0].email,
		type: "POST",
		data: y,
		dataType: "JSON",
		success: function (data1) {
			console.log('success', data1);
			alert(data1);
		},
		error: function (XMLHttpRequest, textStatus, errorThrown) {
			console.log('error', errorThrown);
		}
	});
	// window.location.replace("./home.html");
}
