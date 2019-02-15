var express = require('express'),
    app = express(),
    bodyParser = require('body-parser');
    var multer = require('multer');
    var mysql = require('mysql');
//  var db =mysql("matrimony",["registration"]);
app.use('/', express.static(__dirname + '/'));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "sql@123",
    database: "matrimony"
});

con.connect(function (err, result) {
    if (err) throw err;
    console.log('connected');
});
// var sql = "CREATE TABLE customers (fname VARCHAR(255),lname VARCHAR(255),cpsw VARCHAR(255),psw VARCHAR(255),dob VARCHAR(255),height VARCHAR(255),weight VARCHAR(255),hobbies VARCHAR(255), address VARCHAR(255),photo BYTE,email VARCHAR(255),gender VARCHAR(255),phonenumber VARCHAR(255))";
//        con.query(sql, function (err, result) {
//          if (err) throw err;
//     console.log("Table created");
//         });
app.post('/savedata', function (req, res) {
    //console.log(req.body);

    var userEmail = req.body.email;

    var exitEmail = "SELECT * FROM customers WHERE email = '"+userEmail+"'";

    con.query(exitEmail, function(err, user){
        if(err){
            return console.log(err);
        }
        
        if(user.length > 0) {
            res.send('<h3> Already exists</h3>')
            console.log('user already exists');
        } else {
            var sql = "INSERT INTO customers (fname,lname,cpsw,psw,dob,height,weight,hobbies, address,photo,email,gender,phonenumber) VALUES ('" + req.body.fname + "','" + req.body.lname + "','" + req.body.cpsw + "','" + req.body.psw + "','" + req.body.dob + "','" + req.body.height + "','" + req.body.weight + "','" + req.body.hobbies + "','" + req.body.address + "','" + req.body.photo + "','" + req.body.email + "','" + req.body.gender + "','" + req.body.phonenumber + "')";


            con.query(sql, function (err, result) {
                if (err) throw err;
                console.log(" record inserted");
                // res.redirect('/')
            });
        }
    })

    // var sql = "INSERT INTO customers (fname,lname,cpsw,psw,dob,height,weight,hobbies, address,photo,email,gender,phonenumber) VALUES ('" + req.body.fname + "','" + req.body.lname + "','" + req.body.cpsw + "','" + req.body.psw + "','" + req.body.dob + "','" + req.body.height + "','" + req.body.weight + "','" + req.body.hobbies + "','" + req.body.address + "','" + req.body.photo + "','" + req.body.email + "','" + req.body.gender + "','" + req.body.phonenumber + "')";


    // con.query(sql, function (err, result) {
    //     if (err) throw err;
    //     console.log(" record inserted");
    // });
});
app.post('/getdata', function (req, res) {
    con.query("SELECT * FROM customers WHERE email = '" + req.body.email + "'", function (err, result) {
        if (err) throw err;
        console.log(result[0].cpsw);
    console.log(req.body.psw);
        if (result) {
            if (req.body.psw == result[0].cpsw) {
                res.json(result);
                }
            else { 
                res.json("Invalid password");
            }  
        }

        else {
            res.json("Invalid Email Id");
        }
    });
});

// app.post("/update", function (req,res){
//     var sql = "UPDATE customers SET email = 'req.body.email' WHERE email = 'req.body.email'";
   
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log(result.affectedRows + " record(s) updated");
//       });
//     });
    

app.get('/data1', function (req, res) {
    // console.log("////////////////////////",req);
    con.query("SELECT * FROM customers ", function (err, result) {
        console.log(result);
        if (result) {
            res.json(result);
        }


    });
});

app.post("/update", function (req,res){
    const{fname,lname,email}=req.body;
    console.log(req.body);
    var query= `
        CALL customers(?,?,?);
    `
    con.query(query,[fname,lname,email],function(err,result){
        if(!err){
            res.json("updated");
        }else{
            console.log(err);
        }
    });

//     var exitEmail = "SELECT * FROM customers WHERE email = '"+req.body.email+"'";
// con.query(exitEmail, function(err,result){
//     if (err) throw err;
//     if(result.length>0){
//         console.log('user found')
//         var sql = "UPDATE customers SET email = '"+req.body.email+"' WHERE email = '"+req.body.email+"'";
//        console.log(sql);
//         con.query(sql, function (err, result) {
//         if (err) throw err;
//                 console.log(result.affectedRows + " record(s) updated");
//                });
//     } else {
//         console.log('user not found')
//     }
// })
//     var sql = "UPDATE customers SET email = '"+req.body.email+"' WHERE email = '"+req.body.email+"'";
//    console.log(sql);
//     con.query(sql, function (err, result) {
//         if (err) throw err;
//         console.log(result.affectedRows + " record(s) updated");
//       });
    });
    

app.put('/delete', function (req, res) {
    console.log("1111",req.body)
    var sql = "DELETE FROM customers WHERE email = 'req.body.email '";
    con.query(sql, function (err, result) {
        if (err) throw err;
        
            console.log("Number of records deleted: " + result.affectedRows);
        
        });
        });

    

    app.get('/print', function (req, res) {
        con.query("SELECT * FROM customers ", function (err, result) {
            console.log(result);
            if (result) {
                res.json(result);
            }
    
    
        });
    });
    
    

app.listen(8006);