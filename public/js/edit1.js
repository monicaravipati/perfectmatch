
function firstnamee() {
	var alphaExp = /^[a-zA-Z ]*$/;
	var y = $("firstName1").val();
	if (y == "") {
		$("p02").html("please enter first name");
	}

	else if (!(alphaExp.test(y))) {
		$("p02").html("please enter first name only alphabets");
	}
	else {
		$("p02").html("");
	}
}
function Lastnamee() {
	var alphaExp = /^[a-zA-Z ]*$/;
	var x = $("lName1").val();
	if (x == "") {
		$("p03").html("please enter last name");
	}
	else if (!(alphaExp.test(x))) {
		$("p03").html("please enter last name only alphabets");
	}
	else {
		$("p03").html("");
	}
}
function Emaill() {
	var mailformat = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
	var x = $("email1").value;
	if (x == "") {
		$("p04").html("please enter email");
	}
	else if (!(mailformat.test(x))) {
		$("p04").html("please enter  perfect email");
	}
	else {
		$("p04").html("");
	}
}
function pwdd() {
	var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
	var x = $("pswrd1").val();
	if (x == "") {
		$("p05").html("please enter password");
	}
	else if (!x.match(pattern)) {
		$("p05").html("please enter password 8 characters includes uppercase special character and number");
	}
	else {
		$("p05").html("");
	}
}
function Cpwdd() {
	var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
	var x = $("pswrd1").val();
	var y = $("cpwd1").val();
	if (x == "") {
		$("p06").html("please enter re password");
	}
	else if (!x.match(pattern)) {
		$("p06").html("please enter password 8 characters includes uppercase special character and number");
	}
	else if (x != y) {
		$("p06").html("password not matches");
	}
	else {
		$("p06").html("");
	}
}
function Dobb() {
	var x = $("birth1").val();
	if (x == "") {
		$("p07").html("please enter dob");
	}
	else {
		$("p07").html("");
	}
}
function pnumm() {
	var phoneno = /^\d{10}$/;
	var x = $("phoneNumber1").val();
	if (x == "") {
		$("p08").html("please enter PHONENUMBER");
	}
	else if (!(phoneno.test(x))) {
		$("p08").html("please enter valid contact");
	}
	else {
		$("p08").html("");
	}
}
function Heightt() {
	// var height=/^[2-9]' ?(?:\d|1[0-1])"?$/;
	var height = /^[0-9]+ ?(\'|ft|cm|meters|feet|in|inches|\")?( *[1-9]+ ?(\"|inches|in|cm)?)?$/;
	// console.log("11111",height);
	// var height=/^(d+)('|")(?:([0-12]+)(?!2)")?$/;
	var x = $("heigh1").val();
	if (x == "") {
		$("p09").html("please enter HEIGHT");
	}
	else if (!(height.test(x))) {
		$("p09").html("please enter a valid height");
	}
	else {
		$("p09").html("");
	}

}

function Weightt() {


	//  var weightt=/^\d{2,3} ?kg$/;
	var x = $("weight1").val();
	if (x == "") {
		$("p00").html("please enter WEIGHT");
	}
	// 	else if(!(weightt.test(x)))
	//   {
	// 	  document.getElementById("p0").innerHTML="please enter a valid weight"; 
	//   }
	else {
		$("p00").html("");
	}
}

function Hobbiess() {
	var x = $("hobbies1").val();
	if (x == "") {
		$("hai0").html("please enter your hobbies");
	}
	else {
		$("hai0").html("");
	}
}
// function Photoo() {
// 	var x = $("photo1").val();
// 	if (x == "") {
// 		$("hi0").html("please enter your hobbies");
// 	}
// 	else {
// 		$("hi0").html("");
// 	}
// }
// function Photo()
// {
//     var x=document.getElementById("photo").value;
//     if(x=="")
//     {
//       document.getElementById("hi0").innerHTML="please upload your photo";
//     }
//     else{
//         document.getElementById("hi0").innerHTML="";
//     }
// }
function Addresss() {
	var x = $("address1").val();
	if (x == "") {
		$("hye1").html("please enter your address");
	}
	else {
		$("hye1").html("");
	}
}
function Update1() {
	var data = {};
	//var x = document.getElementById("g1").checked; data.uids = $('#uid').val(); 
	data.fname = $('#firstName1').val();
	data.lname = $('#lName1').val();
	data.emailid = $('#email1').val();
	// data.pwd = $('#pswrd1').val();
	// data.dob = $('#cpwd1').val();
	data.dob = $('#birth1').val();
	data.dob = $('#phoneNumber1').val();
	data.dob = $('#heigh1').val();
	data.dob = $('#weight1').val();
	data.dob = $('#g21').val();
	data.dob = $('#g11').val();
	data.dob = $('#religion1').val();
	data.dob = $('#mothertongue1').val();
	data.dob = $('#hobbies1').val();
	data.dob = $('#address1').val();
	// data.dob = $('#photo1').val();
	data.add = $('#address').val();
	data.rpsw = $('#cpsw').val();
	$.ajax({
		type: "POST",
		url: "/updatedata1",
		data: data,
		dataType: "json",
		success: function (res) {
			console.log(res);
		}
	})
}