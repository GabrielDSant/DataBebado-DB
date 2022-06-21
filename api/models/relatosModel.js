const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class relatosModel extends Model {}

    relatosModel.init({
        nome: DataTypes.STRING,
        tamanho: DataTypes.STRING,
        relato: DataTypes.STRING,
    },
    {
        sequelize,
        modelName: 'relatos',
        timestamps: false
    });

    return relatosModel
}

