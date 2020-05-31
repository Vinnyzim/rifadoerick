const connection = require('../database/connection')

module.exports = {

    //Criar Usuarios
    async criarUsuario (request, response)  {
        const {nome, email, telefone, logradouro, complemento, localidade, uf, descricao_conhece_mamae_papai, msg_erick} = request.body;

        const verificaEmail = await connection('usuario').select('email').where('email', email);

        let lenEmail = verificaEmail.length;
    
        if (lenEmail > 1 ) {

            return response.json({Mensagem: "Email já está sendo usado!"});
            
        } 
        else {
        await connection('usuario').insert({
            nome,
            email,
            telefone,
            logradouro,
            complemento,
            localidade,
            uf,
            descricao_conhece_mamae_papai,
            msg_erick,
        })
    
        return response.json({Mensagem:"Cadastro Concluido com sucesso"});
    }
    },

    //Listar Usuarios
    async listarUsuarios(request, response)  {

        const listaUsuarios = await connection('usuario').select('*');
    
        return response.json(listaUsuarios);
    },

    //Deletar Usuarios
    async deletarUsuario(request, response) {

        const {id} = request.params;

        await connection('usuario').where('id', id).delete();

        return response.status(204).send();
        
    }

};