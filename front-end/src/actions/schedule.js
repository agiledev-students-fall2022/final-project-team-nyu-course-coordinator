import * as api from '../api/index.js';

export const addToSchedule = async (sectionId, userId) => {
  try {
    const { data } = await api.addToSchedule(sectionId, userId)
    return(data)
    // dispatch({ type: 'ADD_TO_SCHEDULE', payload: data });
  } catch (error) {
    console.log(error)
  }
}

export const removeFromSchedule = async (sectionId, userId) => {
  try {
    const { data } = await api.removeFromSchedule(sectionId, userId)
    return(data)
    // dispatch({ type: 'REMOVE_FROM_SCHEDULE', payload: id });
  } catch (error) {
    console.log(error)
  }
}
