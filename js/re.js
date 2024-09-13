
let pswd;
let logName;
let logId;


const p1 = new Fied("logId",async (value) => {
    logId = value;
    if(!value) {
        return "此处不能为空"
    }
    const respon = await isExist(value);
    if(respon.data) {
        return "账号已被占用"
    }
})

const p2 = new Fied("logName",async (value) => {
    logName = value;
    if(!value) {
        return "此处不能为空"
    }
})

const p3 = new Fied("logpswd", async (value) => {
    pswd = value;
    if(!value) {
        return "请输入密码"
    }
})

const p4 = new Fied ("relogpswd", async (value) => {
    if(!value) {
        return "请再次确认你的密码"
    }
    if(value !== pswd) {
        return "密码与第一次不一致"
    }
})

document.querySelector(".re").onsubmit = async function (e) {
    e.preventDefault();
    if(!Fied.fiederAll(p1,p2,p3,p4)) {
        console.log("buky")
        return
    }
    const respon = await regct(logId,logName,pswd);
    console.log(respon)
    location.href = webBAS_URL + 'login.html'
}