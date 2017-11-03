var express = require('express');
var app = express();
var dateformat = require('dateformat');

//Get userdetails associated with tododetails
app.get('/getuserdetails/:id', function(request, response){
	var userid = request.params.id;
	var i;
	var userdetails = {};
	var tododetails = {};
	var data = {};
	for(i=0;i<user.length;i++){
		if(user[i].id === userid){
			userdetails.id = user[i].id;
			userdetails.fname = user[i].fname;
			userdetails.lname = user[i].lname;
			userdetails.email = user[i].email;
			userdetails.pincode = user[i].pincode;
			userdetails.birtdate = user[i].birtdate;
			userdetails.isActive = user[i].isActive;
			
			tododetails.id = user[i].toDos.id;
			tododetails.text = user[i].toDos.text;
			tododetails.done = user[i].toDos.done;
			tododetails.targetDate = user[i].toDos.targetDate;
			}		
	}
	data.tododetails = tododetails;
	data.userdetails = userdetails;
	response.send('this is the data>>>>>>>>>>>'+JSON.stringify(data));
	
});

//get specific toDos
app.get('/gettododetails/:id', function(request, response){
	var userid = request.params.id;
	var todos = {};
	for(i=0;i<user.length;i++){
		if(user[i].toDos.id === userid){
			todos.id = user[i].toDos.id;
			todos.userid = user[i].id;
			todos.text = user[i].toDos.text;
			todos.done = user[i].toDos.done;
			todos.targetDate = user[i].toDos.targetDate;
		}
	}
	response.send('this is the data>>>>>>>>>>>'+JSON.stringify(todos));
});

//get all active users
app.get('/getallactiveusers', function(request,response){
	var userid = request.params.id;
	var userdetails = {};
	var tododetails = {};
	var data = {};
	var datarray = [];
	for(i=0;i<user.length;i++){
		if(user[i].isActive === true){
			userdetails.id = user[i].id;
			userdetails.fname = user[i].fname;
			userdetails.lname = user[i].lname;
			userdetails.email = user[i].email;
			userdetails.pincode = user[i].pincode;
			userdetails.birtdate = user[i].birtdate;
			userdetails.isActive = user[i].isActive;
			
			tododetails.id = user[i].toDos.id;
			tododetails.text = user[i].toDos.text;
			tododetails.done = user[i].toDos.done;
			tododetails.targetDate = user[i].toDos.targetDate;
	data.tododetails = tododetails;
	data.userdetails = userdetails;
	datarray.push(data);
	}		
	}
	response.send('this is the data>>>>>>>>>>>'+JSON.stringify(datarray));

});

//get all active todos user which have target date as today and tomorrow
app.get('/getallactivetodousers', function(request,response){
	var userid = request.params.id;
	var tododetails = {};
	var todoarray = [];
	var i;
	var todayDate = dateformat(new Date(), 'dd-mmm-yyyy');
	var tomorrowDate = dateformat(new Date(new Date().getTime()+ 24 * 60 * 60 * 1000), 'dd-mmm-yyyy');
	
	for(i=0;i<user.length;i++){
		if(user[i].isActive === true && (user[i].toDos.targetDate === todayDate || user[i].toDos.targetDate === tomorrowDate)){			
			tododetails.id = user[i].toDos.id;
			tododetails.text = user[i].toDos.text;
			tododetails.done = user[i].toDos.done;
			tododetails.targetDate = user[i].toDos.targetDate;
	todoarray.push(tododetails);
	}		
	}
	response.send('this is the data>>>>>>>>>>>'+JSON.stringify(todoarray));
			
	
});

app.listen(3000, function(){
	console.log('server started');
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

targetDate: "03-Nov-2017"

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

targetDate: "03-Nov-2017"

}

}

]