const fetchActivity = async (endpoint) => {
  const response = await fetch(`http://www.boredapi.com/api/activity?${endpoint}`)
  return checkForError(response);
}

const checkForError = (response) => {
  if (response.ok) {
    console.log(response)
    return response.json()  
  } else {
    throw new Error('UH OH! Something has gone horribly wrong!!!')
  }
}

export { fetchActivity } 