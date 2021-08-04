const fetchActivity = async (endpoint) => {
  const response = await fetch(`http://www.boredapi.com/api/activity?${endpoint}`)
  return checkForError(response);
}

const checkForError = (response) => {
  if (response.ok) {
    return response.json()  
  } else {
    throw new Error('UH OH! Something has gone terribly wrong!')
  }
}

export { fetchActivity } 