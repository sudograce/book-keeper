export interface LoginResponse {
  user: {
    token: string;
    name: string;
    id: string;
  }
}

export interface LoginBody {
  email: string,
  password: string
}
