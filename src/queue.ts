import { Message } from './message.ts'

class Qnode<Message> {
  value: Message;
  next: Qnode<Message> | null = null ;

  constructor(value: Message){
    this.value = value;
  }
}

class Queue<Message> {
  head: Qnode<Message> | null = null;
  tail: Qnode<Message> | null = null;

  enqueue(value: Message) {
    const newNode = new Qnode(value);
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  dequeue(): Message | null {
    if (!this.head) {
      return null; 
    }
    const value = this.head.value;
    this.head = this.head.next;
    if(!this.head) {
      this.tail = null;
    }
    return value;
  }

  isEmpty(): boolean {
    return this.head === null;
    }
  }