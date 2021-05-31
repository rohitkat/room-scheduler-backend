module.exports = (sequelize, Sequelize, DataTypes) => {
  const Room = sequelize.define(
    "room", // Model name
    {
      // Attributes
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      roomNumber: {
        type: DataTypes.STRING,
        unique: true,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true
      },
    },
    {
      // Options
      timestamps: true,
      underscrored: true,
      createdAt: "created_at",
      updatedAt: "updated_at",
    }
  );

  return Room;
};
