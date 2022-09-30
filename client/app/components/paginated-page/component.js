import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import UserList from '../userslist'
import { requestPage } from '../../actions/paginated-page'
import { useDispatch, useSelector } from 'react-redux'

import {
  Link
} from 'react-router-dom'

import Pagination from 'react-router-pagination-io/client/app/components/common/pagination'

const PaginatedPage = ({ pageNumber }) => {
  const pageContent = useSelector((state) => state.paginatedPage.pageContent)
  const [isLoaded, setIsLoaded] = useState(false)
  const dispatch = useDispatch()

  useEffect(() => {
    if (pageContent) {
      setIsLoaded(true)
    } else {
      dispatch(requestPage(pageNumber))
    }
  }, [pageContent])

  return (
    <section>
      <h1>Pagination (Page {pageNumber})</h1>
      <Pagination />
      <nav>
        <p>Return to the <Link to='/'>index page</Link>.</p>
        {pageNumber && (
          <>
            <p>Redux has state for page {pageNumber}.</p>
            {!isLoaded
              ? <p>Loading...</p>
              : (
                  <div className='wrapper'>
                    <UserList users={pageContent.data} />
                  </div>
                )}
          </>
        )}
      </nav>
    </section>
  )
}

PaginatedPage.propTypes = {
  pageNumber: PropTypes.number.isRequired
}

export default PaginatedPage
