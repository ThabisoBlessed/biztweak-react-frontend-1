export interface ILoginResponse {
  status: boolean;
  message: string;
  package: {
    data: string;
  };
}

export interface ILoginRequest {
    email: string;
    password: string;
}

export interface ILoginErrorResponse {
    status: string;
    message: string;
    payload: IPayload[];
  }

interface IPayload {
    msg: string;
    param: string;
    location: string;
}