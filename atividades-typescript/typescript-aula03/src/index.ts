// class Usuario {

// 	nome: string;
// 	conta: string;
// 	saldo: number;

// //constutor
// 	constructor(nome: string, conta: string, saldo: number){
// 		this.nome = nome;
// 		this.conta = `001 ${conta}`;
// 		this.saldo = saldo;
// 	}

// //métodos
// 	deposito(valor: number): void {
// 	this.saldo += valor;
//   }

//   	saque(valor:number): void{
// 		this.saldo -= valor;
// 	}

// 	exibirSaldo(): string{
// 		return `A usuária ${this.nome} que possui a conta ${this.conta} tem o saldo ${this.saldo} `
// 	}
// }

// //objeto
// const usuario1 = new Usuario("Ana", "9183-9", 200);
// // console.log(usuario1);

// usuario1.deposito(200);
// console.log("deposito", usuario1);

// usuario1.saque(150);
// console.log("saque", usuario1);

class Calculadora {
	numero1: number;
	numero2: number;

	constructor(numero1: number, numero2: number) {
		this.numero1 = numero1;
		this.numero2 = numero2
	}

	soma(): number {
		return this.numero1 + this.numero2;
	}

	sub(): number {
		return this.numero1 - this.numero2;
	}

	multi(): number {
		return this.numero1 * this.numero2;
	}

	dividir(): number {
		if(this.numero2 === 0) {
			throw new Error("Utilize um número diferente de zero.");
		}

		if (this.numero1 > this.numero2){
			return this.numero1 / this.numero2;
		} else {
			return this.numero2 / this.numero1;
		}
	}
}

const calculadora = new Calculadora(30, 5);
console.log(calculadora);
console.log(calculadora.soma()); 
console.log(calculadora.sub()); 
console.log(calculadora.multi()); 
console.log(calculadora.dividir());

const calculadora2 = new Calculadora(30, 0);
console.log(calculadora2.dividir()); 

