import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { document_a } from 'actions'

const mapActionToProps = {
  push: push,
  fetchDocuments: document_a.getDocumentsRequest,
  deleteDocument: document_a.deleteDocumentRequest
}

const mapStateToProps = (state) => ({
  documents: state.document.list
})

export default connect(mapStateToProps, mapActionToProps)
