export interface TopicInterface {
  _id?: string;
  name: string;
  description: string;
  subscribers: number;
  unsubscribers: number;
  emails_send_count: number;
  created_at?: Date;
}
