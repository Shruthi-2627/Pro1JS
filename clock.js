function clockChaaluHoJaa()
{
    let date = new Date(); 
    let hours = date.getHours();
    let mins = date.getMinutes();
    let secs = date.getSeconds();

    if(hours>=12 && hours<=24) 
     {
         document.getElementById("ampm").innerText = "PM";
     }
     else
     {
     document.getElementById("ampm").innerText = "AM";
    }

    let message = document.getElementById("greet"); 
    if(hours>=4 && hours<=12)
    {
        message.innerText= "GOOD MORNING"
    }
    if(hours>12 && hours<16)
    {
        message.innerText = "GOOD AFTERNOON!!";  
    }
    if(hours>=16 && hours<=20)
    {
        message.innerText = "GOOD EVENING !!";  
    }
    if(hours>=20 && hours<=24)
    {
        message.innerText = "GOODNIGHT!!";  
    }

    if(hours > 12) 
    hours=hours-12;


    let hrs=document.getElementById("hrs");
    hrs.innerText = hours;
    let minutes=document.getElementById("minutes");
    minutes.innerText = mins;
    let seconds=document.getElementById("seconds");
    seconds.innerText = secs;

    
    let btn = document.getElementById("setAlarmBtn");
    btn.addEventListener("click", TimeTable);
    btn.addEventListener("click", ChangeMessageTheme);

    btn.addEventListener("mouseover", ChangeText);
    btn.addEventListener("mouseout", ChangeTextBack);
    
    } 

setInterval(clockChaaluHoJaa, 1000) 




    function ChangeText(){
    document.getElementById("setAlarmBtn").innerText = "Party Time!";
    }
    function ChangeTextBack(){
    document.getElementById("setAlarmBtn").innerText = "Set Alarm";
    }
    


    function TimeTable(){
    let Time=document.getElementsByClassName("Time");

   
    Time[0].innerText = wake.options[wake.selectedIndex].text;
    Time[1].innerText = lunch.options[lunch.selectedIndex].text;
    Time[2].innerText = nap.options[nap.selectedIndex].text;
    Time[3].innerText = night.options[night.selectedIndex].text;
    }

    function ChangeMessageTheme(){
        let dates = new Date();
        hourss = dates.getHours();
    
        let textMessage = document.getElementById("message");
        let theme = document.getElementById("imageTheme");
    
    
        if(parseInt(wake.value)===hourss)
        {
        textMessage.innerText="GRAB SOME HEALTHY BREAKFAST!!!";
        theme.style.backgroundImage= "url('./goodmorning.svg')";
        }
        else if(parseInt(lunch.value)===hourss)
        {
        textMessage.innerText="LET'S HAVE SOME LUNCH !!";
        theme.style.backgroundImage= "url('./lunch.svg')";
        }
        else if(parseInt(nap.value)===hourss)
        {
        textMessage.innerText="STOP YAWNING, GET SOME TEA.. ITS JUST EVENING!";
        theme.style.backgroundImage= "url('./lunch_image@2x.png')";
        }
        else if(parseInt(night.value)===hourss)
        {
        textMessage.innerText="GREAT DAY AHEAD, GO TO SLEEP!!!";
        theme.style.backgroundImage= "url('./sleep.svg')";
        }
    }

 

