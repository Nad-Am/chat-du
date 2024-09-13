document.querySelector(".login").onsubmit = async (e) => {
    document.querySelector(".mes").innerHTML = "";
    e.preventDefault();
    const data = await login(document.querySelector("#reid").value,document.querySelector("#repswd").value);
    const toke ='Bearer ' + data.headers.get("Authorization")
    const respon = await data.json();
    setData("Authorization",toke);
    if(respon.code === 400) {
        document.querySelector(".mes").innerHTML = respon.msg;
        return
    }
    window.location.href = webBAS_URL + "chat.html";
}