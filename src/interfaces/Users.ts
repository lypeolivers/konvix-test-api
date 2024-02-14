export interface IUserRequest {
  des_email: string;
  des_senha: string;
}

export interface IUser {
  cod_usuario: number;
  des_email: string;
  des_senha: string;
  flg_inativo: boolean;
}

export interface IUserLogin {
  des_email: string;
  des_senha: string;
}

export interface IUserResponse {
  cod_usuario: number;
  des_email: string;
  des_senha: string;
  flg_inativo: boolean;
}
