import * as api from '../api/index.js';

export const addToSchedule = async (user ,id) => {
  try {
    const { data } = await api.addToSchedule(user, id);
    return(data)
    // dispatch({ type: 'ADD_TO_SCHEDULE', payload: data });
  } catch (error) {
    console.log(error);
  }
}

export const removeFromSchedule = (id) => async (dispatch) => {
  try {
    await api.removeFromSchedule(id);
    dispatch({ type: 'REMOVE_FROM_SCHEDULE', payload: id });
  } catch (error) {
    console.log(error);
  }
}
