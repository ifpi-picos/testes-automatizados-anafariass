export default class ContaBancaria {
  private numeroConta : number;
  private saldo = 0;
  private agencia: number ;
  private extrato: string[] = [];

  public constructor(numeroConta: number, agencia: number) {
    this.numeroConta = numeroConta;
    this.agencia = agencia;
  }


  public depositar(valor: number) {
      if (valor > 0) {
        this.saldo += valor;
        this.registrarOperacao(`Depósito de R$${valor}`);
      }
  }

  public sacar(valor: number): void {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
      this.extrato.push(`Saque de R$${valor}`);
    }else {
      throw new Error("Saldo insuficiente");
    }
  }

  public transferir(valor: number, contaDestino: ContaBancaria): void {
    if (valor > 0 && this.saldo >= valor) {
      this.sacar(valor);
      contaDestino.depositar(valor);
      this.registrarOperacao(`Transferência de R$${valor} para conta ${contaDestino.NumeroConta()}`);
    } else {
      throw new Error("Saldo insuficiente ou valor de transferência inválido.");
    }
  }

  public NumeroConta(){
    return this.numeroConta 
  }
  
  private registrarOperacao(descricao: string): void {
    const data = new Date().toLocaleString();
    this.extrato.push(`${data} - ${descricao}`);
  }
  public consultarSaldo() {
    return this.saldo;
  }

  public exibirExtrato(){
    return this.extrato
  }

}

