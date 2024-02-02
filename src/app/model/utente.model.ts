export class Utente {
    public userCode: string;
    public tipo: string;
    public email: string;
    public nome: string;
  
    constructor(userCode: string, tipo: string, email: string, nome: string) {
      this.userCode = userCode;
      this.tipo = tipo;
      this.email = email;
      this.nome = nome;
    }
  }
  