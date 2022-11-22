import Singleton from './Singleton';

function delay(delay: number) {
    return new Promise(r => {
        setTimeout(r, delay);
    })
}

export default class Timer {
    private static counter = 0;

    constructor(public counter: number) {
        this.counter = counter;
        this.doTimer();
    }

    async doTimer() {
        for (let i = 0; i < this.counter; i++) {
            await delay(1000);
            this.counter = this.counter - 1;
            console.log(this.counter);
        }
        Singleton.getInstance().someBusinessLogic();
    }

    getCounter(): number {
        return this.counter;
    }
    
}