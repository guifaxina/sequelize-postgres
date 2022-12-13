import { DataTypes } from "sequelize";
import database from "./db";

export const Product = database.define('product', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true, 
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING(120),
    allowNull: false,
  },
  price: DataTypes.DECIMAL,
  description: DataTypes.STRING
})

