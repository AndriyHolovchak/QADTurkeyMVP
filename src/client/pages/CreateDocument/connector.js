import { connect } from 'react-redux'
import { push } from 'react-router-redux'
import { document_a, toast_a } from 'actions'

const mapActionToProps = {
  createDocument: document_a.createDocumentRequest,
  push: push,
  fetchDocument: document_a.getDocumentById,
  documentByIdFulfiled: document_a.documentByIdFulfiled,
  updateDocument: document_a.updateDocumentRequest
}

const mapStateToProps = (state) => ({
  creating: state.document.creating,
  documentForUpdating: state.document.documentForUpdating
})

export default connect(mapStateToProps, mapActionToProps)
