export default class ContaBancaria {
  private numeroConta : number;
  private saldo = 0;
  private agencia: 1 ;
  private extrato: string[];

  public constructor() {
    this.numeroConta = 0
    this.agencia = 1
    this.extrato = []
  }

  public depositar(valor: number) {
    if (valor > 0) {
      this.saldo += valor;
    }
  }

  public sacar(valor:number){
    if (this.saldo >= valor){
        this.saldo -= valor;
        return valor;

    }

    //return throw new Error("Saldo insuficiente")

  }
  public numberConta(valor:number){
    return this.numeroConta 
  }

  public consultarSaldo() {
    return this.saldo;
  }




}

