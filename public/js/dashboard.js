//////////////////////////////// PRINTING THE DETAILS/////////////////////////////////////////
var data2 = {};
function printdata(value) {
    var htmldata = "";
    var dat1 = data2.filter(function (index) {
        return index.fname === value;
    })
    console.log(dat1)
    htmldata += `<div  style="background-color:white"><b><center>
    <td><h3><u>CANDIDATE DETAILS</u></h3></td>
    <table><tr>
        <td> <p>FIRST NAME = ${dat1[0].fname}</p></td>
        <td><p>LAST NAME=${dat1[0].lname}</p></td></tr>
        <tr><td> <p>HEIGHT=${dat1[0].height}</p></td>
        <td><p>ADDRESS=${dat1[0].address}</p></td></tr>
     <tr><td><p>DOB=${dat1[0].dob}</p></td>
        <td> <p>EMAIL=${dat1[0].email}</p></td></tr>
        <tr><td><p>GENDER=${dat1[0].gender}</p></td>
        <td><p>WEIGHT=${dat1[0].weight}</p></td></tr>
        <tr><td><p>QUALIFICATION=${dat1[0].qualification}</p></td>
        <td><p>PROFESSION=${dat1[0].profession}</p></td></tr>
        <tr><td><p>WORKING=${dat1[0].working}</p></td>
        <td><p>SALARY=${dat1[0].salary}</p></td></tr>
        <tr><td><p>RELIGION=${dat1[0].Religion}</p></td>
        <td><p>LANGUAGE=${dat1[0].language}</p></td></tr>
        <tr><td><p>ZODIAC=${dat1[0].zodiac}</p></td>
        <td><p>HOBBIES=${dat1[0].hobbies}</p></td></tr>
        <tr><td><p>PHONENUMBER=${dat1[0].phonenumber}</p></tr></table>
        <img src="${dat1[0].photo}"style="height:35%; width:35% !important"></img></b></center>
        <a href="/pay"><h4><i class="glyphicon glyphicon-comment"></i></h4></a></div></div>`
    $('#span2').html(htmldata);
}
function getProfile(){
    debugger
    $('#span1').hide();
   $('#span4').show();
    mydata();
}
// function print(){
// $("#show").click(function(){
//     $("#span4").show();
//   });
// }
//////////////////////////////// PRINTING THE IMAGES/////////////////////////////////////////
function print() {
    // alert("m");
   $('#span4').hide();
   $('#span1').show();
    var data = {};
    var htmldata = '';
    var user = JSON.parse(window.sessionStorage.getItem("name"));
    console.log('///', user);
    data.email = user[0].email;
    data.gender = user[0].gender;
    var url = '/data1',
        type = 'GET',
        data = data,
        dataType = 'json',
        page = 'dashboard';
    services(url, type, data, dataType, page);


}
