/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.addColumn('products', 'offter', { 
      type: Sequelize.BOOLEAN,
      defaultValue: false,
      allowNull: false,
    });   
  },

  async down (queryInterface) {
     await queryInterface.removeColumn('products', 'offter'); 
  },
};
