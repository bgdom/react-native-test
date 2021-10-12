export interface UserData{
  name: string;
  email: string;
  id: number;
}

export interface UserState {
  data?: UserData;
}

export interface UserRegister{
  email: string;
  name: string;
}