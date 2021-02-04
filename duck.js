// All js changes
function appendMsg(){
    var msg = document.getElementById("txt");
    var keyco = document.getElementById("codes");
    msg.onkeypress = function(event){
        // console.log(event.code);
        if (msg.value.trim() === ""){
            keyco.innerText += event.code;
            return;
        }
        keyco.innerText += event.code;
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

        chat.scrollTop = chat.scrollHeight-chat.clientHeight;
        msg.value ="";
        }
    };
};

function openSettings(){

};

function collapseChat(){
    var chatDiv=document.getElementById("msgs");
    var txtDiv = document.getElementById("chat");
    chatDiv.style.display="none";
    txtDiv.style.display="none";
    chatDiv.style.visibility='none';
    txtDiv.style.visibility='none';
    // document.getElementById("chatWindow").style.height="10%";
};