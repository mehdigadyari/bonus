import React from 'react'
import ThemeProvider from './components/themeprovider/themeprovider'
import MasterLayout from './screens/masterlayout'
import RTL from './components/rtl/rtl'
import LoginContextProvider from './contexts/LoginContext'
import TimeContextProvider from './contexts/TimeContext'
import AuthenticateContextProvider from './contexts/AuthnticateContext'
import AlertContextProvider from './contexts/Alert/AlertContext'
import ReportContextProvider from './contexts/ReportContext'

function App() {
  return (
    <div>
      <ThemeProvider>
        <RTL>
          <AlertContextProvider>
            <AuthenticateContextProvider>
              <TimeContextProvider>
                <LoginContextProvider>
                  <ReportContextProvider>
                    <MasterLayout />
                  </ReportContextProvider>
                </LoginContextProvider>
              </TimeContextProvider>
            </AuthenticateContextProvider>
          </AlertContextProvider>
        </RTL>
      </ThemeProvider>
    </div>
  )
}

export default App
