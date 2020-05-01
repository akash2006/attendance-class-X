class Student{
    constructor(){
        this.roll = 0;
        // this.code = Math.round(random(1000,9999));
        this.day = 0;
        this.mnth = 0;
        this.yr = 0;
        this.hr = 0;
        this.min = 0;
        this.sec = 0;
    }
    update(){
        database.ref("students/student"+this.roll).update({
            state:"P",
            date :this.day,
            month : this.mnth,
            year : this.yr,
            hour : this.hr,
            minute : this.min,
            second : this.sec
        });
    }
    getTime(){
        this.day = day();
        this.mnth = month();
        this.yr = year();
        this.hr = hour();
        this.min = minute();
        this.sec = second();
    }
}