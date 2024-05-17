class Cliente {
	codigo: number;
	endereco: string;

	constructor(codigo: number, endereco:string) {
		this.codigo = codigo;
		this.endereco = endereco;
	}

	localizarEndereco() {
		return `O cliente ${this.codigo} reside no endereço ${this.endereco}`
	}
}

const cliente = new Cliente(10, "Rua Azul");
console.log(cliente.localizarEndereco());
