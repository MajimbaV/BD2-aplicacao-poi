import sequelize from "./database/sequelize.js";

import { DataTypes } from "sequelize";

const User = sequelize.define(
    'User', 
    {
        firstName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        lastName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            primaryKey: true
        }
    }
)

User.sync();

User.create({
    firstName: 'abobra',
    lastName: 'verde',
    email: 'abobraverde@email.com'
}).then((user)=> {
    console.log(`Usuário ${user.firstName} criado com sucesso!`);
}).catch((error) => {
    console.log("Erro ao criar o usuário:", error);
});