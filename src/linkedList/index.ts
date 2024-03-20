class ListNode<T>{
    value: T;
    next: ListNode<T> | null;

    constructor(value: T){
        this.value = value;
        this.next = null;
    }
}

export class LinkedList<T>{
    head: ListNode<T> | null;
    tail: ListNode<T> | null;

    constructor(){
        this.head = null;
        this.tail = null; 
    }


    append(value: T){
        const newNode = new ListNode(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        this.tail!.next = newNode;
        this.tail = newNode;
    }

    prepend(value: T){
        const newNode = new ListNode(value);

        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }

    delete(value: T){
        if(!this.head){
            return "no head Provided";
        }

        if(this.head.value === value){
            this.head = this.head.next;
            if(!this.head){
                this.tail = null
            }
            return;
        }
        let current = this.head;
        while(current.next){
            if(current.next.value === value){
                current.next = current.next.next
                if(!current.next){
                    this.tail = current;
                }
                return;
            }
            current = current.next
        }
    }

    print(){
        const values: T[] = [];

        let current = this.head

        while(current){
            values.push(current.value);
            current = current.next
        }
        console.log(values.join(" -> "))
    }
}