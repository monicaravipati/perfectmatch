//////////////////////////////////////////////SIGNUP VALIDATIONS////////////////////////////////
function firstname() {
	var alphaExp = /^[a-zA-Z ]*$/;
	var y = $("#firstName").val();
	if (y == "") {
		$("#p2").html("pl");
	}
	else if (!(alphaExp.test(y))) {
		$("#p2").html("please enter first name only alphabets");
	}
	else {
		$("#p2").html("");
	}
}

// function Email() {
// 	var mailformat = /^\w+([\.-]?\w+)+@\w+([\.:]?\w+)+(\.[a-zA-Z0-9]{2,3})+$/;
// 	var x = $("email").val();
// 	if (x == "") {
// 		$("#p4").html("please enter email");
// 	}
// 	else if (!(mailformat.test(x))) {
// 		$("#p4").html("please enter  perfect email");
// 	}
// 	else {
// 		$("p#4").html("");
// 	}
// }

function pwd() {
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

function Cpwd() {
	var pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;
	var x = $("#pswrd").val();
	var y = $("#cpwd").val();
	if (x == "") {
		$("#p6").html("please enter re password");
	}
	else if (!x.match(pattern)) {
		$("#p6").html("please enter password 8 characters includes uppercase special character and number");
	}
	else if (x != y) {
		$("#p6").html("password not matches");
	}
	else {
		$("#p6").html("");
	}
}

function Dob() {
	var x = $("#birth").val();
	if (x == "") {
		$("#p7").html("please enter dob");
	}
	else {
		$("#p7").html("");
	}
}

function pnum() {
	var phoneno = /^\d{10}$/;
	var x = $("#phoneNumber").val();
	if (x == "") {
		$("#p8").html("please enter PHONENUMBER");
	}
	else if (!(phoneno.test(x))) {
		$("#p8").html("please enter valid contact");
	}
	else {
		$("#p8").html("");
	}
}

function Height() {
	var height = /^[0-9]+ ?(\'|ft|cm|meters|feet|in|inches|\")?( *[1-9]+ ?(\"|inches|in|cm)?)?$/;
	var x = $("#height").val();
	if (x == "") {
		$("#p9").html("please enter HEIGHT");
	}
	else if (!(height.test(x))) {
		$("#p9").html("please enter a valid height");
	}
	else {
		$("#p9").html("");
	}

}

function Weight() {
	var x = $("#weight").val();
	if (x == "") {
		$("#p0").html("please enter WEIGHT");
	}
	else {
		$("#p0").html("");
	}
}

function Hobbies() {
	var x = $("hobbies").val();
	if (x == "") {
		$("hai").html("please enter your hobbies");
	}
	else {
		$("#hai").html("");
	}
}

function Photo() {
	var x = $("photo");
	if (x == "") {
		$("hi").html("please upload your photo");
	}
	else {
		$("hi").html("");
	}
}
function Address() {
	var x = $("#address").val();
	if (x == "") {
		$("#hye").html("please enter your address");
	}
	else {
		$("#hye").html("");
	}
}
////////////////////////////////////////Convert Image to Base64//////////////////////////////////////
	$("#inputFileToLoad").change(function () {
		var filesSelected = $("inputFileToLoad").files;
		if (filesSelected.length > 0) {
			var fileToLoad = filesSelected[0];
			var fileReader = new FileReader();
			fileReader.onload = function (fileLoadedEvent) {
				var base64value = fileLoadedEvent.target.result;
				console.log(base64value);
				$("#response").val(base64value);
			};
			fileReader.readAsDataURL(fileToLoad);
		}
	});

$(document).ready(function () {
	
});
/////////////////////////////////////SIGNUP DATA////////////////////////////////////
function reg() {
	var data = {};
	data.fname = $('#firstName').val();
	data.lname = $('#lName').val();
	data.email = $('#email').val();
	data.cpsw = $('#cpwd').val();
	data.psw = $('#pswrd').val();
	data.dob = $('#birth').val();
	data.phonenumber = $('#phoneNumber').val();
	data.height = $('#height').val();
	data.weight = $('#weight').val();
	data.hobbies = $('#hobbies').val();
	data.photo = $('#response').val();
	data.address = $('#address').val();
	if ((g1.checked == false)) {
		data.gender = "female";
	}
	else {
		data.gender = "male";
	}
	data.qualification = $('#qualification').val();
	data.profession = $('#profession').val();
	data.working = $('#working').val();
	data.salary = $('#salary').val();
	data.Religion = $('#Religion').val();
	data.language = $('#language').val();
	data.zodiac = $('#zodiac').val();
	// if (data.fname == "" || data.lname == "" ||  data.cpsw == "" || data.psw == "" || data.dob == "" || data.phonenumber == "" || data.height == "" || data.weight == "" || data.hobbies == "" || data.photo == "" || data.address == "" || data.gender == "" || data.qualification == "" || data.profession == "" || data.working == "" || data.salary == "" || data.Religion == "" || data.language == "" || data.zodiac == "") {
	// 	alert('please enter required field');
	// } else {
		$.ajax({
			type: "POST",
			url: "/savedata",
			data: data,
			success: function (res) {
				// console.log(res);
			}
		})
	
	console.log(data);
}
