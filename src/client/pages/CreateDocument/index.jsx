import { compose } from 'redux'
import CreateDocument from './CreateDocument'
import connector from './connector'

export default connector(CreateDocument)
