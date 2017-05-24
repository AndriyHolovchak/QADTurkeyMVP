import { push } from 'react-router-redux'
import { call, put, select, takeLatest, fork } from 'redux-saga/effects'

import { document_a as actions } from 'actions'
import { grid_s as selectors } from 'selectors'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import {} from '../../DAL'
import { delay } from 'redux-saga'
import { toast_a as toast } from 'actions'

function* gettingDocumentDataFlow(action) {

}

export default function* watcher() {
  yield [
    takeLatest(actions.DOCUMENT_DATA_REQUEST, gettingDocumentDataFlow),
  ];
}
