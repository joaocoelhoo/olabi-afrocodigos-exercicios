// interface IContaBancaria {
//   transferencia(valor: number, contaDestino: IContaBancaria): void
//   receberTransferencia(valor: number): void
// }

interface IContaBancaria {
saldo: number,
depositar(valor: number): number,
sacar(valor:number): number
}

// interface IContaBancariaJuridica extends IContaBancaria {
//   emitirNF(): void
// }

// type IContaBancariaType = {
//   transferencia(valor: number, contaDestino: IContaBancaria): void
//   receberTransferencia(valor: number): void
// }

class ContaBancaria implements IContaBancaria {
	saldo: number
	numeroDaConta: string;
	depositar(valor: number, numeroDaConta: string): number {
		this.saldo += valor;
		this.numeroDaConta = numeroDaConta;
		return this.saldo;
	}

	sacar(valor: number): number {
		this.saldo -= valor;
		return this.saldo
	}

	constructor(saldo: number) {
		this.saldo = saldo;
		this.numeroDaConta = numeroDaConta;

	}
}

const conta = new ContaBancaria(Number saldo: 100);
