class CadastroClientes {

    constructor (nome, email, tel, cpf, endereco){
        this.nome = nome;
        this.email = email;
        this.tel = tel;
        this.cpf = cpf;
        this.endereco = endereco;
    }

}

class CadastroProdutos {

    constructor (nome, codigo, tipo, marca, preco){
        this.nome = nome;
        this.codigo = codigo;
        this.tipo = tipo;
        this.marca = marca;
        this.preco = preco;
    }

}

class BD {

    constructor (){
        let id = localStorage.getItem('id');
        if(id === null){
            localStorage.setItem('id', 0);
        }
    }


    getProximoId(){
        let proximoId = localStorage.getItem('id');
        return parseInt(proximoId) + 1;
    }

    gravar(cliente){
        let id = this.getProximoId();
        localStorage.setItem(id, JSON.stringify(cliente));

        localStorage.setItem('id', id);
    }

    gravar(produto){
        let id = this.getProximoId();
        localStorage.setItem(id, JSON.stringify(produto));

        localStorage.setItem('id', id);
    }

}

let bd = new BD();

function cadastrarCliente(){
    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    let tel = document.getElementById('tel');
    let cpf = document.getElementById('cpf');
    let endereco = document.getElementById('endereco');

    let cadastroclientes = new CadastroClientes(
        nome.value, email.value, tel.value, cpf.value, endereco.value
    );

    bd.gravar(cadastroclientes);
}

function cadastrarProdutos(){
    let nome = document.getElementById('nome');
    let email = document.getElementById('email');
    let tel = document.getElementById('tel');
    let cpf = document.getElementById('cpf');
    let end = document.getElementById('endereco');

    let cadastroprodutos = new CadastroProdutos(
        nome.value, email.value, tel.value, cpf.value, endereco.value
    );

    bd.gravar(cadastroprodutos);
}


