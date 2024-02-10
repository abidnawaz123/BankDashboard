import React from 'react'
import { useAuthContext } from '../../../hooks/useAuthContext'

const Settings = () => {
  const {user} = useAuthContext()
  return (
    <div style={{ padding: 20 }}>
      currently logged in gmail is : <bold>{user?.email}</bold>
    </div>
  )
}

export default Settings
