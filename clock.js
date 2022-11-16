function time(){
    var d = new Date();
    var myStandardTime = d.toLocaleTimeString();
    document.getElementById("clock").innerHTML = myStandardTime;
}

var changeSeconds = setInterval(time, 1000);