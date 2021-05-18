module.exports = (sequelize, DataTypes) => {
  const Expression = sequelize.define(
    'Expression',
    {
      // id가 기본적으로 들어있다.
      pinyin: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
      meaning: {
        type: DataTypes.STRING(100),
        allowNull: false,
      },
    },
    {
      charset: 'utf8mb4',
      collate: 'utf8mb4_general_ci',
    }
  );
  Expression.associate = (db) => {
    db.Expression.belongsTo(db.Post);
  };
  return Expression;
};
