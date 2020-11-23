/* eslint-disable no-case-declarations */
/* eslint-disable no-console */

import { ADD_REPORT, SEARCH_REPORT } from '../constants/ActionTypes'

export function reducer(state, action) {
  switch (action.type) {
    case ADD_REPORT:
      console.log('zzz')
      return {
        reports: state.reports.concat(action.report),
        searchedReports: []
      }
    case SEARCH_REPORT:
      let fp
      if (action.searchType === 'title') {
        const regex = new RegExp(`^${action.searchText}`)
        fp = state.reports.filter((item) => {
          return regex.test(item.title)
        })
      } else {
        fp = state.reports.filter((item) => {
          return item.text.includes(action.searchText)
        })
      }
      return {
        reports: state.reports,
        searchedReports: [...fp]
      }

    default:
      return {
        reports: state,
        searchedReports: []
      }
  }
}
