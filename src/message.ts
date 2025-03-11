export interface Message {
  id: string;
  content: any;
  type: 'pubsub' | 'p2p';
  topic?: string; // for pubsub
  queueName?: string; // for p2p
  createdAt: Date;
}