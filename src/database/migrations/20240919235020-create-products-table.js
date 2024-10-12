/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('products', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      category: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      path: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
    });

  },

  async down(queryInterface) {
    await queryInterface.dropTable('products');
  }
};

/** Conceitos de relacionamentos
 * 1:1 --> Um registro e uma tabela, só pode ser relacionada com outro registro e outra tabela.Ex: matricula de um usuário;
 * 1:N --> Um produto só pode ter uma categoria, mas uma categoria pode ter varios produtos. Ex: bebidas, lanches,etc..;
 * N:N --> Um acesso por ter vários e vários por ter um. Ex: Um usuário por ter acesso a vários cursos e um curso pode ter varios usuários;
 */