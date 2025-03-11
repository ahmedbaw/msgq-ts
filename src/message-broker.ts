import { Message } from './message.ts'

class MessageBroker {
  private pubsubTopics: Map<string, Set<(msg: Message) => void>> = new Map();
  private p2pqueue: Map<string, Message[]> = new Map();
  private consumers: Map<string, Set<(msg: Message) => void>> = new Map();

  constructor() {}

  // Pub/Sub methods
  publish(topic: string, msg: Message) {
    if (this.pubsubTopics.has(topic)) {
      
    } 

  } 
}