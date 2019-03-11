/////////////////////////////////////// SERVICES/////////////////////////////////////////
function services(url, type, data, dataType, page) {
    $.ajax({
        url: url,
        type: type,
        data: data,
        dataType: dataType,

        success: function (data1) {
            console.log('success', data1);
            success_data(data1, page);
        },
        error: function (XMLHttpRequest, textStatus, errorThrown) {
            console.log('error', errorThrown);

        }
    });
}
////////////////////////////////////////// FILTERS/////////////////////////
function success_data(success_data, page) {
    debugger
    switch (page) {
        case 'filters': 
            console.log(success_data)
            dataobj = success_data;
            htmldata += '<html>'
            $.each(success_data, function (i, value) {
                htmldata += `<img class="col-sm-4" src='${value.photo}' onclick=printdata1('${value.fname}') height="320" width="232"></img>`
                console.log(value);
            });
            htmldata += '</html>'
            $('#span1').html(htmldata);
            break;
        ////////////////////////////// PRINTING IMAGES//////////////////////////////////////////
        case 'printimage': 

            console.log('success', success_data);
            data2 = success_data;
            var htmldata = "";
            htmldata += '<html>'
            $.each(data2, function (i, value) {
                htmldata += `<div class="col-sm-4" >
                  <img  src="${value.photo}"  id ="Image" onclick=printdata('${value.fname}')  height="320" width="232"></img></div>`

                // console.log(value);
            })
            htmldata += '</html>'
            $('#span1').html(htmldata);
            break;
        ///// ////////////////////////////////LOGIN//////////////////////////////////////
        case 'login': 
            console.log(success_data)
            //debugger
            if (success_data == "Invalid Email Id") {
                $('#error').html(success_data);
                console.log(success_data);
            } else if (success_data == "ENTER VALID DETAILS") {
                $('#error').html(success_data);
                console.log(success_data);
            }
            else {
                window.sessionStorage.setItem("name", JSON.stringify(success_data));
                window.location.href = "/home";

            }
            break;
        ////////////////////////////////DASHBOARD//////////////////////////////////////////
        case 'dashboard': 
            console.log('success', success_data);
            data2 = success_data;
            var htmldata = '';

            htmldata += '<html>'
            $.each(data2, function (i, value) {
                htmldata += `<div class="col-sm-4" height="320" width="232" >
                <img  src="${value.photo}" onclick=printdata('${value.fname}') height="320" width="232"></img></div>`

            });
            htmldata += '</html>'
            $('#span1').html(htmldata);
            break;
        /////////////////////////////////////ADMIN LOGIN//////////////////////////////////////
        case 'adminlogin': 
            console.log(success_data);
            if (success_data.length > 0) {
                alert("Login Success");
                 window.location.href="/adminedit";
            } else {    
                $('#perror').html("Invalid Email ID");
            }     
            break;
    }
}
