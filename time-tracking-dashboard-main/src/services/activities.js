import axios from 'axios'

const baseUrl = "http://localhost:3001/activities"

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const activityService = { getAll }

export default activityService