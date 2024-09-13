import { beforeEach, describe, expect, test } from "bun:test";
import ContaBancaria from "./ContaBancaria.ts";


describe("Testando classe ContaBancaria", () => {
  let conta: ContaBancaria;
  beforeEach(() => {
    conta = new ContaBancaria();
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
    conta.sacar(50)
    expect(conta.consultarSaldo()).toBe(50);
  });

  test("Lançando erro", () => {
    conta.depositar(100);
    expect (() => {
      conta.sacar(150);
    }).toThrow("Saldo insuficiente")
  });
});