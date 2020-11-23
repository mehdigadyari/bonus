/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from 'react'
import FormControl from '@material-ui/core/FormControl'
import { Typography } from '@material-ui/core'
import Select from '@material-ui/core/Select'
import useStyles from './search.styles'
import SearchedReport from './searchedReport'
import { ReportContext } from '../../../contexts/ReportContext'
import { SEARCH_REPORT } from '../../../constants/ActionTypes'

export default function Search() {
  const classes = useStyles()
  const { state, dispatch } = useContext(ReportContext)

  const [text, setText] = useState('')
  const [typeT, setTypeT] = useState('title')

  useEffect(() => {
    if (text !== '') {
      dispatch({
        type: SEARCH_REPORT,
        searchText: text,
        searchType: typeT
      })
    }
  }, [text, typeT])
  return (
    <div className={classes.root}>
      <div className={classes.topDiv}>
        <div className={classes.formDiv}>
          <Typography>جستجو بر حسب:</Typography>

          <FormControl className={classes.formControl}>
            <Select
              native
              value={typeT}
              onChange={(e) => setTypeT(e.target.value)}
            >
              <option value="title">عنوان</option>
              <option value="text">متن</option>
            </Select>
          </FormControl>
        </div>
        <div className={classes.textDiv}>
          <Typography>عبارت خود را وارد کنید:</Typography>
          <input
            value={text}
            onChange={(e) => {
              setText(e.target.value)
            }}
          />
        </div>
      </div>
      <div className={classes.bottomDiv}>
        {state.searchedReports.map((item) => {
          return <SearchedReport report={item} />
        })}
      </div>
    </div>
  )
}
