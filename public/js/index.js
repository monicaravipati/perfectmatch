///////////////////////////////// FILTERING THE DATA/////////////////////////////////////
var dataobj = {};
function Submit() {
  //var htmldata = "";
  var filter = {};
  filter.for = $('#for').val();
  filter.age1 = $('#age1').val();
  filter.age2 = $('#age2').val();
  filter.religion = $('#religion').val();
  filter.language = $('#language').val();
  console.log("filter", filter);
  var url = '/filter',
    type = 'POST',
    data = filter,
    dataType = 'json',
    page = 'filters';
  services(url, type, data, dataType, page);
};
function div() {
  window.location.href = "login.html";
}
/////////////////////////////////////////// PRINTING THE DETAILS OF FILTERED///////////////////////////////
function printdata1(value) {
  var htmldata = "";
  var dat1 = dataobj.filter(function (index) {
    return index.fname === value;
  })
  console.log(dat1);
  htmldata += ` <div style="background-color:white"><center><B><u><p>CANDIDATE DETAILS</p> </u></B>
  <p><b>FIRST NAME =${dat1[0].fname}</p>
  <p>LAST NAME= ${dat1[0].lname}</p> 
  <p>HEIGHT=${dat1[0].height}</p>
  <p>DOB=${dat1[0].dob}</p>
  <p>GENDER=${dat1[0].gender}</p>
  <p>WEIGHT=${dat1[0].weight}</p>
  <p>QUALIFICATION=${dat1[0].qualification}</p>
  <p>PROFESSION=${dat1[0].profession}</p>
  <p>WORKING=${dat1[0].working}</p>
  <p>SALARY=${dat1[0].salary}</p>
  <p>RELIGION =${dat1[0].Religion}</p>
  <p>LANGUAGE=${dat1[0].language}</p>
  <p>ZODIAC=${dat1[0].zodiac}</p>
  <p>HOBBIES=${dat1[0].hobbies}</b>
  </p><img src="${dat1[0].photo}" style="height:35%; width:35% !important"></img></div>`
  $('#span2').html(htmldata);
}
///////////////////////////////////// PRINTING THE DETAILS////////////////////////////////
function printdata(value) {
  $( "p" ).hover(
    function() {
      $( this ).append( $("#Image.htmldata") );
    }, function() {
      $( this ).find( "span:last" ).remove();
    }
  );
  var htmldata = "";
  var dat1 = data2.filter(function (index) {
    return index.fname === value;
  })
  console.log(dat1);

  htmldata += `<div  style="background-color:white" onclick="div()"><center><B><u><p>CANDIDATE DETAILS</p></u></B>
  <p><b>FIRST NAME =${dat1[0].fname}</p>
  <p>LAST NAME=${dat1[0].lname}</p>
  <p>DOB=${dat1[0].dob}</p>
    <p>PROFESSION=${dat1[0].profession}</p>
    <p>WORKING=${dat1[0].working}</p>
    <p>RELIGION=${dat1[0].Religion}</p>
    <p>LANGUAGE=${dat1[0].language}</p></b>
    <p><img src="${dat1[0].photo}" style="height:35%; width:35% !important"></img></div>`
  $('#span2').html(htmldata);
}
///////////////////////////////////// PRINTING THE IMAGES////////////////////////////////
function print() {
  var data = {};
  var htmldata = '';
  var url = '/data1',
    type = 'GET',
    data = data,
    dataType = 'json',
    page = 'printimage';
  services(url, type, data, dataType, page);
}


