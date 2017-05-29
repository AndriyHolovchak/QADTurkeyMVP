export const GET_DOCUMENTS_REQUEST = 'QAD/DOCUMENT_DATA_REQUEST'
export const DOCUMENTS_DATA_FULFILED = 'QAD/DOCUMENT_DATA_FULFILED'
export const CREATING_DOCUMENT = 'QAD/DOCUMENT_DATA_PENDING'
export const CREATE_DOCUMENT_REQUEST = 'QAD/CREATE_DOCUMENT_REQUEST'
export const DELETE_DOCUMENT_REQUEST = 'QAD/DELETE_DOCUMENT_REQUEST'
export const GET_DOCUMENT_BY_ID = 'QAD/DOCUMENT_BY_ID_REQUEST'
export const DOCUMENT_BY_ID_DATA_FULFILED = 'QAD/DOCUMENT_BY_ID_DATA_FULFILED'
export const UPDATE_DOCUMENT_REQUEST = 'QAD/UPDATE_DOCUMENT_REQUEST'

export const getDocumentsRequest = () => ({
  type: GET_DOCUMENTS_REQUEST,
})

export const documentsDataFulfiled = (data) => ({
  type: DOCUMENTS_DATA_FULFILED,
  payload: data
})

export const creatingDocument = (creating) => ({
  type: CREATING_DOCUMENT,
  payload: { creating }
})

export const createDocumentRequest = (data) => ({
  type: CREATE_DOCUMENT_REQUEST,
  payload: data
})

export const deleteDocumentRequest = (data) => ({
  type: DELETE_DOCUMENT_REQUEST,
  payload: data
})

export const getDocumentById = (data) => ({
  type: GET_DOCUMENT_BY_ID,
  payload: data
})

export const documentByIdFulfiled = (data) => ({
  type: DOCUMENT_BY_ID_DATA_FULFILED,
  payload: data
})

export const updateDocumentRequest = (data) => ({
  type: UPDATE_DOCUMENT_REQUEST,
  payload: data
})
