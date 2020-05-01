class StudentPage{
    constructor(){
        this.greeting = createElement('h1');
        this.rollInput = select('#rollInput');
        this.subButt = select('#submit');
    }
   
    display(){
        this.greeting.html("Hello Student, please enter your roll number in the box given below and click on submit to give your attendance");
        this.greeting.position(400,200);
        this.rollInput.position(400,450);
        this.subButt.position(450,550);
        this.subButt.mousePressed(()=>{
            if(attState === "start"){
                student.roll = this.rollInput.value();
                student.getTime();
                student.update();
                this.rollInput.hide();
                this.subButt.hide();
                this.successMessage = createElement('h1');
                this.successMessage.html("Thanks for your attendance. Your presence has been recorded in our system.");
                this.successMessage.position(400,600);
            }else{
                this.errMessage = createElement('h1');
                this.errMessage.html("Please wait for the teacher to start the attendance");
                this.errMessage.position(400,600);
            }
        });
    }
}