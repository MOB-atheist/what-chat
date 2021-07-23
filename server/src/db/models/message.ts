import { Model, Optional, DataTypes } from 'sequelize'
import { sequelize } from '.'

interface MessagesAttribute {
  id: string
  message: string
}

/*
  We have to declare the AuthorCreationAttributes to
  tell Sequelize and TypeScript that the property id,
  in this case, is optional to be passed at creation time
*/
interface AuthorCreationAttributes extends Optional<MessagesAttribute, 'id'> {}

interface AuthorInstance
  extends Model<MessagesAttribute, AuthorCreationAttributes>,
    MessagesAttribute {
  createdAt?: Date
  updatedAt?: Date
}

const Message = sequelize.define<AuthorInstance>('Message', {
  id: {
    primaryKey: true,
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    unique: true
  },
  message: {
    allowNull: false,
    type: DataTypes.TEXT
  }
})

export default Message
