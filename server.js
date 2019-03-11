var express = require('express'),
    app = express();
var session = require('express-session');
var MySQLStore = require('express-mysql-session')(session);
var bodyParser = require('body-parser');
var path = require("path");
var mysql = require('mysql');
var bcrypt = require('bcryptjs');
var ageCalculator = require('age-calculator');
let { AgeFromDateString, AgeFromDate } = require('age-calculator');
var nodemailer = require('nodemailer');
///////////////////////////////////////////
var {
    NODE_ENV = 'development',
    sess_name = 'sid',
    lifetime = 1000 * 60 * 60 * 2
} = process.env
var IN_PROD = NODE_ENV === 'prodcution'
///////////////////////////////
app.use(session({
    name: sess_name,
    resave: false,
    saveUninitialized: false,
    store: new MySQLStore({
        host: "localhost",
        user: "root",
        // port:'3309',
        password: "sql@123",
        database: "matrimony"
    }),
    secret: 'oop! sorry it\'s a secret',
    cookie: {
        maxAge: lifetime,//if not mention will be stay untill browser close
        sameSite: true,
        secure: IN_PROD
    }
}))
function redirectLogin(req, res, next) {
    if (!req.session.userId) {
        res.redirect('/login.html')
    } else {
        next()
    }
}
function redirectHome(req, res, next) {
    if (req.session.userId) {
        res.redirect('/home1.html')
    } else {
        next()
    }
}
////////////////////////////////////
app.use('/', express.static(__dirname + '/'));
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
    // res.send("<h1>This Is Landing Page</h1>");
});
app.get('/admin', function (req, res) {
    res.sendFile(path.join(__dirname + '/adminlogin.html'));
    // res.send("<h1>This Is Landing Page</h1>");
});
// app.get('/user', function (req, res) {
//     res.sendFile(path.join(__dirname + '/adminedit.html'));
//     // res.send("<h1>This Is Landing Page</h1>");
// });
app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname + '/dashboard.html'));
    // res.send("<h1>This Is Landing Page</h1>");
});
// app.get('/login', function (req, res) {
//     res.sendFile(path.join(__dirname + '/login.html'));
//     // res.send("<h1>This Is Landing Page</h1>");
//});
app.get('/signup', function (req, res) {
    res.sendFile(path.join(__dirname + '/signup.html'));
    // res.send("<h1>This Is Landing Page</h1>");
});
app.get('/pay', function (req, res) {
    res.sendFile(path.join(__dirname + '/pay.html'));
    // res.send("<h1>This Is Landing Page</h1>");
});
app.get('/adminedit', function (req, res) {
    res.sendFile(path.join(__dirname + '/adminedit.html'));
    // res.send("<h1>This Is Landing Page</h1>");
});
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    // port:'3309',
    password: "sql@123",
    database: "matrimony"
});
con.connect(function (err, result) {
    if (err) throw err;
    console.log('connected');
});
///////////////////////////////////////////
//  con.query("CREATE DATABASE matrimony", function (err, result) {
//     if (err) throw err;
//      console.log("Database created");
//    });
//  var sql = "CREATE TABLE customers (fname VARCHAR(255),lname VARCHAR(255),"+
//    "cpsw VARCHAR(255),psw VARCHAR(255),dob VARCHAR(255),height VARCHAR(255),weight VARCHAR(255),hobbies VARCHAR(255),"+ "address VARCHAR(255),photo LONGTEXT,email VARCHAR(255),gender VARCHAR(255),phonenumber VARCHAR(255),"+
//    " qualification VARCHAR(255),profession VARCHAR(255),working VARCHAR(255),salary VARCHAR(255),"+
//    "Religion VARCHAR(255),language VARCHAR(255),zodiac VARCHAR(255))";
//      con.query(sql, function (err, result) {
//          if (err) throw err;
//      console.log("Table created");
//          });
////////////////////////////////////////SAVING THE REGISTERED DATA//////////////////////////////////////////
app.post('/savedata', function (req, res) {
    //console.log(req.body);
    var userEmail = req.body.email;
    var password = req.body.psw;
    var exitEmail = "SELECT * FROM customers WHERE email = '" + userEmail + "'";
    con.query(exitEmail, function (err, user) {
        if (err) {
            return console.log(err);
        }
        if (user.length > 0) {
            res.send('<h3> Already exists</h3>')
            console.log('user already exists');
        } else {
            bcrypt.genSalt(12, function (err, salt) {
                bcrypt.hash(password, salt, function (err, hash) {
                    if (err) throw err;
                    password = hash;
                    var sql = "INSERT INTO customers (fname,lname,cpsw,psw,dob,height,weight,hobbies, address,photo,email,gender,phonenumber,qualification,profession,working,salary,Religion,language,zodiac) VALUES ('" + req.body.fname + "','" + req.body.lname + "','" + req.body.cpsw + "'" +
                        ",'" + password + "','" + req.body.dob + "','" + req.body.height + "'" +
                        ",'" + req.body.weight + "','" + req.body.hobbies + "','" + req.body.address + "'" +
                        ",'" + req.body.photo + "','" + req.body.email + "','" + req.body.gender + "'" +
                        ",'" + req.body.phonenumber + "','" + req.body.qualification + "','" + req.body.profession + "'" +
                        ",'" + req.body.working + "','" + req.body.salary + "','" + req.body.Religion + "'" +
                        ",'" + req.body.language + "','" + req.body.zodiac + "')";
                    // console.log(sql);
                    con.query(sql, function (err, result) {
                        if (err) {throw err}
                        else{
                        //     var transporter = nodemailer.createTransport({
                        //             service: 'gmail',
                        //             auth: {
                        //               user: 'oakridgeitsolutions@gmail.com',
                        //               pass: 'Username'
                        //             }
                        //           });
                        //           var mailOptions = {
                        //             from: 'oakridgeitsolutions@gmail.com',
                        //             to: 'ravipatimonica999.mm@gmail.com',
                        //             subject: 'Sending Email From matrimony',
                        //             text: '!'
                        //           };
                        //           transporter.sendMail(mailOptions, function(error, info){
                        //             if (error) {
                        //               console.log(error);
                        //             } else {
                        //               console.log('Email sent: ' + info.response);
                        //             }
                        //           });
                         }
                        console.log(" record inserted");
                        res.redirect('/login')
                    });
                })
            })
        }
    });
});
/////////////////////////////////////////////////LOGIN DATA///////////////////////////////////////////////
app.post('/getdata', function (req, res) {
    console.log(req.body);
    var email = req.body.email;
    var password = req.body.psw;

    con.query("SELECT * FROM customers WHERE email = '" + email + "'", function (err, result) {
        //console.log(result)
        if (err) throw err;
        console.log(result[0].cpsw);
        console.log(req.body.psw);
        if (result.length > 0) {
            bcrypt.compare(password, result[0].psw, function (err, ismatch) {
                if (err) throw err;
                if (ismatch) {
                    console.log('success');
                    res.json(result);
                    //res.redirect('/dashboard');
                } else {
                    res.json("Invalid password");
                }
            })
        }
        else {
            res.json("Invalid Email Id");
        }
    });
});
/////////////////////PRINTING DATA FOR PROFILE(DASHBOARD) PAGE//////////////////////////////
app.get('/data1', function (req, res) {
    //console.log("////////////////////////",req.query);
    con.query("SELECT * FROM customers WHERE email!= '" + req.query.email + "' and gender!='" + req.query.gender + "'", function (err, result) {
        //console.log(result);
        if (result) {
            res.json(result);
        }
    });
});
///////////////////UPDATING THE PROFILE DATA////////////////////////////
app.post("/updating", function (req, res) {
    //console.log(req.body)
    debugger
    var sql = "UPDATE customers SET fname='" + req.body.firstName + "' ,lname='" + req.body.lName + "',dob='" + req.body.birth + "',height='" + req.body.heigh + "',weight='" + req.body.weight + "',hobbies='" + req.body.hobbies + "',address='" + req.body.address + "',phoneNumber='" + req.body.phoneNumber + "',qualification='" + req.body.qualification + "',profession='" + req.body.profession + "',working='" + req.body.working + "',salary='" + req.body.salary + "',Religion = '" + req.body.Religion + "',language = '" + req.body.language + "',zodiac = '" + req.body.zodiac + "' WHERE email = '" + req.body.email + "'";
    // console.log(sql);
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result.affectedRows + " record(s) updated");
    });
});
//////////////////DELETING THE PROFILE DATA//////////////////////
app.post('/del/:email', function (req, res) {
    //console.log("1111",req.params.email)
    var sql = "DELETE FROM customers WHERE email = '" + req.params.email + "'";
    con.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Number of records deleted: " + result.affectedRows);
    });
});
///////////////PRINTING DATA IN INDEX PAGE////////////////////////
app.get('/print', function (req, res) {
    con.query("SELECT * FROM customers WHERE email='" + req.query.Mail + "';", function (err, result) {
        //console.log("SELECT * FROM customers WHERE email='"+ req.query.Mail+"';");
        if (result) {
            res.json(result);
        }
    });
});
////////////////FILTERING AND PRINTING DATA IN INDEX PAGE////////////////////////////
app.post('/filter', function (req, res) {
    var gender, language;
    if (req.body.for === "BRIDE") {
        gender = "female";
    } else {
        gender = "male";
    }
    var sql = "SELECT * FROM customers WHERE gender = '" + gender + "' AND language = '" + req.body.language + "' AND religion='" + req.body.religion + "'"
    con.query(sql, function (err, result) {
        var dataobj = [];
        for (i = 0; i < result.length; i++) {
            // var d = new Date(req.body.dob);
            // var n = d.toString();
            // console.log(result[i].dob)
            let ageFromString = new AgeFromDateString(result[i].dob).age;
            console.log(ageFromString)
            if (ageFromString <= req.body.age2 || ageFromString >= req.body.age1) {
                dataobj.push(result[i]);
            }
            //console.log("value from ageFromString", ageFromString);
        }
        console.log(dataobj);
        res.json(dataobj);
        // if (err) throw err;
        //         console.log(" record inserted");
    });
});
// ///////////////////////////////////////////////
// // app.get('/print1', function (req, res) {
// //     con.query("SELECT * FROM customers ", function (err, result) {
// //         console.log(result);
// //         if (result) {
// //             res.json(result);
// //         }
// //     });
// // });
// /////////////////////////////////////////
// app.get('/filldata/:email', function (req, res) {
//     console.log(req.params.email);
//     var sql = "SELECT * from customers where email ='" + req.params.email + "'";
//     con.query(sql, function (err, row) {
//         if (err) {
//             throw err;
//         }
//         console.log(row);
//         res.json(row);
//     });
// });
//////////////////LOGOUT FUNCTIONALITY/////////////////////
app.get('/logout', function (req, res) {
    req.session.destroy(function (err) {
        if (err) {
            return res.redirect('/dashboard.html')
        }
        res.clearCookie(sess_name)
        res.redirect('/index.html')
    })
})
/////////////////////UPDATING FROM ADMIN SIDE/////////////////////////////
app.post('/update1', function (req, res) {
    console.log(req.body.oldemail);
    var oldemail = req.body.id;
    var updatedcustomer = req.body;
    console.log(updatedcustomer);
    con.query("UPDATE customers SET ? WHERE id = ?", [updatedcustomer, oldemail], function (err, result) {
        if (err) {
            console.log(err);
        } else {
            console.log('customer update sucess');
        }
    })
});
////////////////////////DELETING FROM ADMIN SIDE//////////////////////////////
app.post('/deleterow/:id', function (req, res) {
    //var stmail = req.params.email;
    con.query("DELETE from customers where id = '" + req.params.id + "'", function (err, result) {
        if (err) {
            console.log(err);
        }
        else {
            console.log('customer delete success');
        }
    });
});
////////////////////ADMIN LOGIN///////////////////////////
app.post('/adminlogin', function (req, res) {
    console.log("-------------", req.body);
    // var sql = "CREATE TABLE admin (username VARCHAR(255),password VARCHAR(255))";
    // con.query(sql, function (err, result) {
    //   if (err) throw err;
    //      console.log("Table created");
    // });
    var username = req.body.username;
    var password = req.body.password;
    //     var sql = "INSERT INTO admin (username,password) VALUES ('" + req.body.username + "','" + req.body.password + "')";
    //     con.query(sql, function (err, result) {
    //         if (err) throw err;
    //         console.log(" record inserted");
    //         res.redirect('/login.html')
    //     });
    // })
    var sql = "SELECT * FROM admin WHERE username = '" + username + "' and password='" + password + "'";
    con.query(sql, function (err, row) {
        if (err) {
            return console.log(err);
        }
        if (row.length > 0) {
            //res.send('<script>window.location.href="/user";window.alert("Login Succsessfully")</script>');
            req.session.userId = row[0].username;

            res.json(row);
            console.log(row)
        } else {
            console.log("Invalid Email");
            res.json('0');
        }
    })
});
//////////////////FORGOT PASSWORD///////////////////////////
// var transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'oakridgeitsolutions@gmail.com',
//       pass: 'Username'
//     }
//   });
//   var mailOptions = {
//     from: 'oakridgeitsolutions@gmail.com',
//     to: 'monicamonu999.mm@gmail.com',
//     subject: 'Sending Email using Node.js',
//     text: 'That was easy!'
//   };
//   transporter.sendMail(mailOptions, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
app.listen(8009);