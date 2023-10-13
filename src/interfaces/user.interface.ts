export interface UserInterface {
  _id?: string;
  email: string;
  rol: string;
  password?: string;
  created_at?: Date;
  topics: String[];
}
