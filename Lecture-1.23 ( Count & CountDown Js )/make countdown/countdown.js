var deadline = new Date("May 8 ,2024 17 : 10 : 25").getTime();

let x = setInterval(function(){

    let now = new Date().getTime();

    let t = deadline - now;

    let Days = math.floor(t / 1000 * 60 * 60 * 24);

    let Hours = math.floor(t % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));

    let mins = math.floor(t % (1000 * 60 * 60 ) / (1000 * 60));

    let secs = math.floor(t % (1000 * 60 ) / (1000));

     document.getElementById("tiles").innerHTML = Days + " d " + Hours + " h " + mins + " m " + secs + " s ";

    if(t < 0){
        clearInterval(x);

        document.getElementById("labels").innerHTML = "Expired";
    }

}, 1000);


