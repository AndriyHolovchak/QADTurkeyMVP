import { push } from 'react-router-redux'
import { call, put, select, takeLatest, fork } from 'redux-saga/effects'
import { document_a as actions } from 'actions'
import { document_s as selectors } from 'selectors'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { createDocumentApi, getDocumentsApi, deleteDocumentApi } from '../../DAL'
import { delay } from 'redux-saga'
import { toast_a as toast } from 'actions'

function* creatingDocumentFlow(action) {
  yield put(showLoading())
  yield put(actions.creatingDocument(true))
  try {
    yield call(createDocumentApi, action.payload)
    yield put(toast.displayNotification('success', 'Success', 'Document created successfully'))
    yield put(push('/'))
  } catch (e) {
    yield put(toast.displayNotification('error', 'Creating document failed', 'Something went wrong'));
  } finally {
    yield put(actions.creatingDocument(false))
    yield put(hideLoading())
  }
}

function* getDocumentsFlow() {
  yield put(showLoading());
  try {
    const documents = yield call(getDocumentsApi)
    yield put(actions.documentsDataFulfiled({list: documents}))
  } catch (e) {
    yield put(toast.displayNotification('error', '', 'Something went wrong'));
  } finally {
    yield put(hideLoading())
  }
}

function* deleteDocumentFlow(action) {
  const id = action.payload;
  try {
    yield call(deleteDocumentApi, id)
    const documentsList = yield select(selectors.documentsList)
    _.remove(documentsList, (o) => o.id === id)
    yield put(actions.documentsDataFulfiled({list: [...documentsList]}))
    yield put(toast.displayNotification('success', 'Success', 'Document successfully deleted'))
  } catch (e) {
    yield put(toast.displayNotification('error', '', 'Something went wrong'));
  }
}

export default function* watcher() {
  yield [
    takeLatest(actions.CREATE_DOCUMENT_REQUEST, creatingDocumentFlow),
    takeLatest(actions.GET_DOCUMENTS_REQUEST, getDocumentsFlow),
    takeLatest(actions.DELETE_DOCUMENT_REQUEST, deleteDocumentFlow),
  ];
}
