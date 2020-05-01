class Attendance{
    constructor(){}
    getState(){
        var stateRef = database.ref("state");
        stateRef.on("value",(data)=>{
            attState = data.val();
        });
    }
    updateState(state){
        database.ref("/").update({
            state:state
        });
    }
}