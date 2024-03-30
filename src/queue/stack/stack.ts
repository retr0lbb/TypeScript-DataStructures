class StackCall {
    value: any;
    positionInStack: number;

    constructor({value, positionInStack}: {value: any, positionInStack: number}) {
        this.value = value;
        this.positionInStack = positionInStack;
    }
}

export class Stack {
    elements: StackCall[];

    constructor() {
        this.elements = [];
    }

    push(value: any): void {
        const newStack = new StackCall({
            value: value,
            positionInStack: this.elements.length
        });
        
        this.elements.push(newStack);
    }

    pop(): StackCall | undefined {
        return this.elements.pop();
    }
}
