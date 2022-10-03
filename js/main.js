    
let api="http://worldtimeapi.org/api/timezone/";
async function get(){
    let repo= await fetch (api);
    let data=await repo.json();
    console.log(data);
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


    let tz;
   
    
    time.onchange=function(){
        tz=time.value
        async function show(){
        let repo=await fetch(api+tz)
        let data=await repo.json();
        function dspTz(){
            let clock= document.querySelector(".clock");
            clock.innerHTML=data.datetime.slice((data.datetime.indexOf("T")+1),data.datetime.indexOf("."))
         }
         dspTz()
        }
        
          
            setInterval(() => {
                show()
            }, 1000);
    }

}

get()




