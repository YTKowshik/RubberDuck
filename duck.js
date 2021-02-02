// All js changes
function appendMsg(event){
    var msg = document.getElementById("txt");
    msg.onkeypress = function(event){
        // console.log(event.code);
    if(event.code == "Enter"){
        
        var vals=msg.value;
        var chat=document.getElementById("msgarea");
        var sendMsg = document.createElement('div');
        sendMsg.className='msg-send';
        sendMsg.innerHTML=vals;

        chat.insertBefore(sendMsg,null);

        var recMsg = document.createElement('div');
        recMsg.className='msg-rec';
        recMsg.innerHTML="Quack quack";

        chat.insertBefore(recMsg,null);

        msg.value ='';
        }
    };
};