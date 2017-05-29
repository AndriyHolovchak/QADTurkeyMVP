import { compose } from 'redux'
import CreateDocument from './CreateDocument'
import connector from './connector'
import { withRouter } from 'react-router-dom'

export default withRouter(connector(CreateDocument))
