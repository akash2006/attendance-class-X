// initiate the canvas variable
var canvas;

// initiate the database variable
var database;

// initiate the attendance variables
var attState;

function setup(){
    canvas = createCanvas(displayWidth-20,displayHeight-30);
    database = firebase.database();   
    attendance = new Attendance();
    attendance.getState();
    student = new Student
    studentPage = new StudentPage();
}

function draw(){
    studentPage.display();
}