import {
  call,
  put,
  takeLatest,
  all
} from 'redux-saga/effects'

import {
  REQUEST_PAGE,
  requestPageSucceeded,
  requestPageFailed
} from 'react-router-pagination-io/client/app/actions/paginated-page'

import * as api from 'react-router-pagination-io/client/api/paginated-page'

function * paginatedPage ({ page }) {
  try {
    const pageContent = yield call(api.paginatedPage, { page })
    yield put(requestPageSucceeded(page, pageContent))
  } catch ({ message = 'No error message defined' }) {
    yield put(requestPageFailed(page, { message }))
  }
}

export function * watchPaginatedPage () {
  yield takeLatest(REQUEST_PAGE, paginatedPage)
}

export default function * rootSaga () {
  yield all([
    watchPaginatedPage()
  ])
}
