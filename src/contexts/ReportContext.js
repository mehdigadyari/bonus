import React, { createContext, useReducer } from 'react'
import { reducer } from '../reducers/ReportReducer'

const ReportContext = createContext({
  state: {
    reports: [
      { id: 1, title: 'شنبه', text: 'هوا خوب است ' },
      { id: 2, title: 'یک شنبه', text: 'هوا  امروز خوب و آفتابی است ' },
      {
        id: 3,
        title: 'دو شنبه',
        text: 'هوا  امروز خوب و آفتابی است و من شاد هستم '
      },
      {
        id: 4,
        title: 'سه شنبه',
        text: ' هوا  امروز خوب و آفتابی است و من شاد هستم. امروز جمعه است '
      },
      {
        id: 5,
        title: 'اپلیکیشن',
        text: ' امروز برنامه را نوشتم. '
      },
      {
        id: 6,
        title: 'اپلیکیشن اندروید',
        text: 'بخش ارتباط با سرور هم تمام شد'
      }
    ],
    searchedReports: []
  },
  dispatchT: () => {}
})

export { ReportContext }

function ReportContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, {
    reports: [
      { id: 1, title: 'شنبه', text: 'هوا خوب است ' },
      { id: 2, title: 'یک شنبه', text: 'هوا  امروز خوب و آفتابی است ' },
      {
        id: 3,
        title: 'دو شنبه',
        text: 'هوا  امروز خوب و آفتابی است و من شاد هستم '
      },
      {
        id: 4,
        title: 'سه شنبه',
        text: ' هوا  امروز خوب و آفتابی است و من شاد هستم. امروز جمعه است '
      },
      {
        id: 5,
        title: 'اپلیکیشن',
        text: ' امروز برنامه را نوشتم. '
      },
      {
        id: 6,
        title: 'اپلیکیشن اندروید',
        text: 'بخش ارتباط با سرور هم تمام شد'
      }
    ],
    searchedReports: []
  })
  return (
    <ReportContext.Provider value={{ state, dispatch }}>
      {children}
    </ReportContext.Provider>
  )
}
export default ReportContextProvider
