function setData (key,value) {
    localStorage.setItem(key,value);
}

function getData(key) {
   return localStorage.getItem(key)
}

function clearLocal() {
    localStorage.clear();
}

const webBAS_URL = '/chat-du/'