module.exports = (sequelize, Sequelize, DataTypes) => {
  const Booking = sequelize.define(
    "booking", // Model name
    {
      // Attributes
      id: {
        type: DataTypes.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
      },
      roomId: {
        type: DataTypes.UUID,
      },
      startDate: {
        type: DataTypes.DATEONLY,
      },
      endDate: {
        type: DataTypes.DATEONLY,
      },
      price: {
        type: DataTypes.INTEGER,
      },
      available: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        required: true,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
        required: true,
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

  return Booking;
};
