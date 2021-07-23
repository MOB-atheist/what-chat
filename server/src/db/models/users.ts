import { Model, Optional, DataTypes } from 'sequelize'
import { sequelize } from '.'
import Message from './message'

interface UserAttributes {
  id: string
  firstName: string
  lastName: string
  email: string
}

/*
  We have to declare the AuthorCreationAttributes to
  tell Sequelize and TypeScript that the property id,
  in this case, is optional to be passed at creation time
*/
interface AuthorCreationAttributes extends Optional<UserAttributes, 'id'> {}

interface AuthorInstance
  extends Model<UserAttributes, AuthorCreationAttributes>,
    UserAttributes {
  createdAt?: Date
  updatedAt?: Date
}

const User = sequelize.define<AuthorInstance>('User', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    unique: true
  },
  firstName: {
    allowNull: true,
    type: DataTypes.TEXT
  },
  lastName: {
    allowNull: false,
    type: DataTypes.TEXT
  },
  email: {
    allowNull: true,
    type: DataTypes.TEXT
  }
})

User.hasMany(Message)

Message.belongsTo(User)

export default User
