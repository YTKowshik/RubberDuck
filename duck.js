// All js changes
    var msg = document.getElementById("txt");
    var keyco = document.getElementById("codes");
    msg.onkeyup = function(e){appendMsg(e);};

    function appendMsg(event){
        if (msg.value.trim() === ""){
            keyco.innerText += event.code;
            return;
        }
        keyco.innerText += event.code;
    if(event.code == "Enter"){
        msgBuilder();
        }
    };
function msgBuilder(){
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

function openSettings(){
    let settingsMenu=document.getElementById("settingsMenu");
    if(settingsMenu.style.display=="none"){
        settingsMenu.style.display="block";
    }else{
        settingsMenu.style.display="none";
    }
};

function collapseChat(){
    let msgs=document.getElementById("msgs");
    let chat = document.getElementById("chat");
    let msgArea=document.getElementById("msgarea");
    let icoSend = document.getElementById("sendIcon");
    if(msgs.style.display=="none"){
        msgs.style.display="block";
    }else{
        msgs.style.display="none";
    }
    if(chat.style.display=="none"){
        chat.style.display="flex";
    }else{
        chat.style.display="none";
    }
    if(msgArea.style.display=="none"){
        msgArea.style.display="block";
    }else{
        msgArea.style.display="none";
    }
    if(icoSend.style.display=="none"){
        icoSend.style.display="block";
    }else{
        icoSend.style.display="none";
    }
};


var r = document.querySelector(':root');

// Create a function for getting a variable value
function myFunction_get() {
  // Get the styles (properties and values) for the root
  var rs = getComputedStyle(r);
  // Alert the value of the --blue variable
  alert("The value of --blue is: " + rs.getPropertyValue('--blue'));
}

// Create a function for setting a variable value
function myFunction_set() {
  // Set the value of variable --blue to another value (in this case "lightblue")
  r.style.setProperty('--blue', 'lightblue');
}