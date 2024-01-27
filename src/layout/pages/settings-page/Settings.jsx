import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { user_list } from '../../../api/api'

const Settings = () => {
  const [data,setData] = useState([])
  useEffect(() => {
    fetchUserList()
  }, [])
  const fetchUserList = async () => {
    const response = await axios.get(user_list);
    response && setData(response.data)
  }

  return (
    <div style={{padding:20}}>
      currently logged in as : {data && data.map(item => item.name)}
    </div>
  )
}

export default Settings
