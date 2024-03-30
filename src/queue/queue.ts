class QueueCall{
    value;
    positionInQueue;


    constructor({value, positionInQueue}:{value: any, positionInQueue: number }){
        this.value = value
        this.positionInQueue = positionInQueue
    }


}

//first in First out
export class Queue{
    elements: QueueCall[];

    constructor(){
        this.elements = [];
    }


    enQueue(value: any): void{

        const positionInQueue = this.elements.length 
        const newCall = new QueueCall({positionInQueue, value})

        this.elements.push(newCall)
    }

    dequeue(): QueueCall | undefined{
        return this.elements.shift()
    }

    isEmpty(): boolean{
        return this.elements.length === 0
    }

    size(): number{
        return this.elements.length
    }
}