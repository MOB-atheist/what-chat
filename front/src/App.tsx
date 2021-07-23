import React from 'react'
import { AuthProvider } from './modules/useAuth'

function App(): any {
  return (
    <AuthProvider>
      <>Bem vindo</>
    </AuthProvider>
  )
}

export default App
