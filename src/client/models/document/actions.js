export const DOCUMENT_DATA_REQUEST = 'QAD/DOCUMENT_DATA_REQUEST'
export const DOCUMENT_DATA_FULFILED = 'QAD/DOCUMENT_DATA_FULFILED'
export const DOCUMENT_DATA_PENDING = 'QAD/DOCUMENT_DATA_PENDING'

export const documentDataRequest = (query) => ({
  type: DOCUMENT_DATA_REQUEST,
  payload: query
})

export const documentDataFulfiled = (data) => ({
  type: DOCUMENT_DATA_FULFILED,
  payload: data
})

export const documentDataPending = (pending) => ({
    type: DOCUMENT_DATA_PENDING,
    payload: { pending }
})
