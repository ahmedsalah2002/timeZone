    

async function get(){
    let repo= await fetch ("http://worldtimeapi.org/api/timezone/");
    let data=await repo.json();
    
    let time=document.getElementById("time");
for(let i=0;i<data.length;i++){
    let opt=document.createElement("option");
    opt.value=data[i]
    if(data[i]=="Africa/Cairo"){
        opt.selected=true
    }
    opt.innerHTML=data[i]
    time.appendChild(opt)
}
let tz=time.value;
show()
time.onchange=function(){
    tz=time.value
    show()
}

function show(){
    function dspTz(){
        let date =new Date().toLocaleString("en-NZ",{
            timeZone:tz,timeZoneName:"short"
        })
        document.querySelector(".clock").innerHTML=date.slice(date.indexOf(" "),date.indexOf("G"))
        
    
    }
    setInterval(() => {
        dspTz()
    }, 1000);
}


}

get()




