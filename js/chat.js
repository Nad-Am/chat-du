async function getme () {
    const me = await getmemory(getData("Authorization"))
    if(me.code !== 0) {
        alert(me.msg);
        location.href = "./login.html";
        return
    }
    creatEl(me.data).forEach(element => {
        append(element)
    });
    if(me.data.length === 0) {
        const newel = document.createElement("div");
        newel.innerText = "快来找我聊天吧";
        newel.classList.add("mes","rob");
        append(newel);
    }
}

function creatEl (data) {
   return data.map(i => {
        const EL = document.createElement("div");
        if(i.from) {
            EL.classList.add("mes","peo");
        } else {
            EL.classList.add("mes","rob");
        }
        EL.innerText = i.content;
        return EL;
    })
}

function append (elem) {
    const container = document.querySelector(".context");
    container.appendChild(elem);
    container.scrollTop = container.scrollHeight;
}

async function sendms () {
   const value = document.querySelector("#mesg").value;
   const prompt = document.querySelector(".send div");
   if(!value) {
    prompt.className = 'prompt';
    return
   }
   const newEl = document.createElement("div")
   newEl.innerText = value;
   newEl.classList.add("mes","peo");
   document.querySelector("#mesg").value = '';
   append(newEl)
   const resp = await sendmassege(getData("Authorization"),value);
   const newEl1 = document.createElement("div")
   console.log(resp);
   newEl1.innerText = resp.data.content;
   newEl1.classList.add("mes","rob");
   append(newEl1);
}


getme()

document.querySelector(".send").onclick = ()=>{
    sendms();
}

document.addEventListener('click', (event) => {
     const sendArea = document.querySelector(".send");
     const prompt = document.querySelector(".send div");
 
     if (!sendArea.contains(event.target)) {
         prompt.className = "non";
     }
 });

document.querySelector(".end").onclick = () => {
    clearLocal()
    getme() 
    
}