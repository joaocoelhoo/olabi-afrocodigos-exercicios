class ClienteFisico extends Cliente {
	nome: string;
	cpf: string;

	constructor(nome: string, cpf: string, codigo: number, endereco: string) {
		super(codigo, endereco);
		this.nome = nome;
		this.cpf = cpf;
	}

	//sobrescrever
	// localizarEndereco(): string {
	// 	return this.endereco;
	// }

	validarCpf() {
		if(this.cpf.length === 11){
			return "CPF validado com sucesso."
		}
		return "CPF inválido."
	}
}

const clienteFisico = new ClienteFisico("João", "151515155", 10, "Rua Amarela");
console.log(clienteFisico.localizarEndereco());
console.log(clienteFisico.validarCpf());