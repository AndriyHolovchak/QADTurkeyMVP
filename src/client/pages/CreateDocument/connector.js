import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { document_a, toast_a } from 'actions'

const mapActionToProps = {
  createDocument: document_a.createDocumentRequest
}

const mapStateToProps = (state) => ({
  creating: state.document.creating
})

export default connect(mapStateToProps, mapActionToProps)
