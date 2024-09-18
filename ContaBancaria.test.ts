import { beforeEach, describe, expect, test } from "bun:test";
import ContaBancaria from "./ContaBancaria";

describe("Testando classe ContaBancaria", () => {
  let conta: ContaBancaria;
  let contaDestino: ContaBancaria;

  beforeEach(() => {
    conta = new ContaBancaria(1234, 1);
    contaDestino = new ContaBancaria(5678, 2);
  });

  test("Testando depositar valor positivo", () => {
    conta.depositar(100);
    expect(conta.consultarSaldo()).toBe(100);
  });

  test("Testando depositar valor negativo", () => {
    conta.depositar(-100);
    expect(conta.consultarSaldo()).toBe(0);
  });

  test("Testando saque válido", () => {
    conta.depositar(100);
    conta.sacar(50);
    expect(conta.consultarSaldo()).toBe(50);
  });

  test("Testando transferência válida", () => {
    conta.depositar(200);
    conta.transferir(100, contaDestino);
    expect(conta.consultarSaldo()).toBe(100);
    expect(contaDestino.consultarSaldo()).toBe(100);
  });

  test("Testando exibir extrato", () => {
    conta.depositar(100);
    conta.sacar(50);
    const extrato = conta.exibirExtrato();
    expect(extrato.length).toBe(2); // Depósito e saque
  });

  test("Lançando erro", () => {
    conta.depositar(100);
    expect(() => {
      conta.sacar(150);
    }).toThrow("Saldo insuficiente");
  });
});
