var express = require('express');

var app = express();

var dateFormat = require('dateformat');

//to get userDetails with associated ToDos

app.get('/getuserdetails/:id',function(req,res){

var userId = req.params.id;

var i=0;

var userDetails ={};

var toDoData = {};

var data = {};

for(i=0;i<user.length;i++){

if(user[i].id === userId){

userDetails.id = user[i].id;

userDetails.fName= user[i].fName;

userDetails.lName=user[i].email;

userDetails.pincode=user[i].pincode;

userDetails.birtdate=user[i].birtdate;

userDetails.isActive=user[i].isActive;
toDoData.id = user[i].toDos.id;

toDoData.userId=user[i].userId;

toDoData.text=user[i].toDos.text;

toDoData.done=user[i].toDos.done;

toDoData.targetDate=user[i].toDos.targetDate; 

}

}

data.toDoData = toDoData;

data.userDetails = userDetails;

res.send("this is the data"+JSON.stringify(data));

})







//to get Specific todos

app.get('/gettodo/:id',function(req,res){

var userId = req.params.id;

var toDoData = {};




for(i=0;i<user.length;i++){

if(user[i].toDos.id === userId){

toDoData.id = user[i].toDos.id;

toDoData.userId=user[i].id;

toDoData.text=user[i].toDos.text;

toDoData.done=user[i].toDos.done;

toDoData.targetDate=user[i].toDos.targetDate; 

}}




res.send("this is ToDO Data::"+JSON.stringify(toDoData));

})







//toget all active users




app.get('/activeUsers',function(req,res){

var userDetails ={};

var toDoData = {};

var data = {};

var dataArray =[];




for(i=0;i<user.length;i++){

if(user[i].isActive === true){

userDetails.id = user[i].id;

userDetails.fName= user[i].fName;

userDetails.lName=user[i].email;

userDetails.pincode=user[i].pincode;

userDetails.birtdate=user[i].birtdate;

userDetails.isActive=user[i].isActive;




toDoData.id = user[i].toDos.id;

toDoData.userId=user[i].userId;

toDoData.text=user[i].toDos.text;

toDoData.done=user[i].toDos.done;

toDoData.targetDate=user[i].toDos.targetDate; 




data.userDetails=userDetails;

data.toDoData= toDoData;

dataArray.push(data); 

}}




res.send("this is active users data::"+JSON.stringify(dataArray));

})







// All Active todos Users which have target date as today and tomorrow

app.get('/activetodousers',function(req,res){

var i =0;

//var userId = req.params.id;
var todayDate = dateFormat(new Date(),"dd-mmm-yyyy");
//var todayDate = dateFormat(new Date(),'DD-MM-YYYY');
console.log('Date today is  '+JSON.stringify(todayDate));
var tomorowdate = dateFormat(new Date(new Date().getTime()
+ 24 * 60 * 60 * 1000),'dd-mmm-yyyy');
console.log('Date tomorowdate is  '+JSON.stringify(tomorowdate));
var toDoData = {};

var todoArray = [];

for(i=0;i<user.length;i++){

if (user[i].isActive === true && (user[i].toDos.targetDate===todayDate||user[i].toDos.targetDate===tomorowdate)){

toDoData.id = user[i].toDos.id;

toDoData.userId=user[i].userId;

toDoData.text=user[i].toDos.text;

toDoData.done=user[i].toDos.done;

toDoData.targetDate=user[i].toDos.targetDate; 

todoArray.push(toDoData);

}




}




res.send('this is desired output'+JSON.stringify(todoArray));

 

})










//To listen to the server

app.listen(3000,function(){

 

console.log('Server Started');

});







//My Model

var user = [{

id: "SA101",

fName: "John",

lName: "Carter",

email: "k@gmail.com",

pincode: 208001,

birtdate: '07-Dec-1992',

isActive: true,

toDos: {

id: "td101",

text: "Node Js Assignment",

done: true,

targetDate: "03-Nov-2017"

}

},

{

id: "SA102",

fName: "Rick",

lName: "Bahal",

email: "R@gmail.com",

pincode: 208002,

birtdate: '17-Dec-1992',

isActive: true ,

toDos: {

id: "td102",

text: "Java Assignment",

done: false,

targetDate: "04-Nov-2017"

}

},

{

id: "SA103",

fName: "Lori",

lName: "Krout",

email: "l@gmail.com",

pincode: 208003,

birtdate: '01-Nov-2017',

isActive: true,

toDos: {

id: "td103",

text: "JavaScript Assignment",

done: true,

targetDate: "01-Nov-2017"

}

}

]