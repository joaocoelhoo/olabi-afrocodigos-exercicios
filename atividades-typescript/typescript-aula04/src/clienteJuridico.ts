class ClienteJuridico extends Cliente {
	cnpj: string;
	razaoSocial: string;

	constructor(cnpj: string, razaoSocial: string, codigo: number, endereco:string) {
		super(codigo, endereco);
		this.cnpj = cnpj;
		this.razaoSocial = razaoSocial;
	}

	verificarCnpj() {
		if(this.cnpj.length !== 14){
			return "CNPJ inválido.."

		}
		return "CNPJ validado."
	}
}

const clienteJuridico = new ClienteJuridico("12345", "AUAU", 10, "Rua Verde");
console.log(clienteJuridico.localizarEndereco());
console.log(clienteJuridico.verificarCnpj());