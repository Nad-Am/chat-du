class Fied {
    constructor(textid,fiedrule) {
        this.fiedrule = fiedrule
        this.input = document.querySelector("#" + textid);
        this.p = this.input.nextElementSibling
        this.input.onblur =  (value) => {
            this.fieder()
        }
        this.input.onfocus = () => {
            this.p.innerHTML = ''
        }
    }
    async fieder() {
        const err = await this.fiedrule(this.input.value)
        if(err) {
            this.p.innerHTML = err;
            return false
        }else {
            return true;
        }
    }
    static async fiederAll(...fieds) {
        const proms =  fieds.map(i => i.fieder());
        const result = await Promise.all(proms);
        return result.every(r=>r);
    }
}