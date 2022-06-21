const sequelize = require('../services/db')
const relatosModel = require('../models/relatosModel');
const { Sequelize } = require('sequelize');

//Aqui eu crio a função async que a rota irá importar como metodo e dentro do metodo crio a constante que utiliza
//a classe importada do model, responsavel por renderizar a tabela, para utilizar o metodo sequelize findAll que
//é responsavel por mostrar os itens dentro da tabela. Adiciono a constante como response com res.send(const)

module.exports = {
    async getAll(req, res) {
        sequelize

        const relatosRes = await relatosModel(sequelize, Sequelize.DataTypes).findAll();

        res.status(200).send(relatosRes);
    },

    async create(req, res) {
        sequelize

        await relatosModel(sequelize, Sequelize.DataTypes).create({
            nome: req.body.nome,
            tamanho: req.body.tamanho,
            relato: req.body.relato
        });

        res.status(200).send({ mensagem: "Relato adicionado com sucesso"});
    },

    async edit(req, res) {
        sequelize

        await relatosModel(sequelize, Sequelize.DataTypes).update({
            nome: req.body.nome,
            tamanho: req.body.tamanho,
            relato: req.body.relato
        }, 
        { where: { id: req.params.id } }
        );

        res.status(200).send({mensagem: "Relato de id $req.params.id foi alterado com sucesso."})
    },

    async delete(req, res) {
        sequelize

        await relatosModel(sequelize, Sequelize.DataTypes).destroy({ 
            where: { id: req.params.id },
        });

        res.status(200).send({mensagem: "Relato de id $req.params.id foi alterado com sucesso."})
    },
};