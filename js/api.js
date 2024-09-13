const BASE_URL = 'https://study.duyiedu.com'

async function regct (loginId, nickname, loginPwd) {
    data = {loginId,loginPwd,nickname};
    return await fetch(BASE_URL + "/api/user/reg", {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body:JSON.stringify(data)
    }).then(re => re.json());
}

async function login (loginId, loginPwd) {
    return fetch(BASE_URL + '/api/user/login', {
        method:"POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({loginId, loginPwd})
    })
}

async function isExist (loginId) {
    return await fetch(BASE_URL + '/api/user/exists' + `?loginId=` + loginId).then(re => re.json())
}

async function inform (authorization) {
    return await fetch(BASE_URL + '/api/user/profile', {
        method:"GET",
        headers:{
            authorization
        }
    }).then(re => re.json());
}

async function sendmassege(authorization, content) {
    const mess = JSON.stringify({ content });
    
    return await fetch(BASE_URL + "/api/chat", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",  // 修正拼写
            "Authorization": authorization       // 规范化头部字段
        },
        body: mess
    }).then(re => re.json());
}

async function getmemory (authorization) {
    return await fetch(BASE_URL + '/api/chat/history', {
        headers: {
            "Authorization": authorization 
        }
    }).then(re => re.json())
}