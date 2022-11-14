import * as api from '../api/index.js';

export const addToSchedule = (id) => async (dispatch) => {
  try {
    const { data } = await api.addToSchedule(id);
    dispatch({ type: 'ADD_TO_SCHEDULE', payload: data });
  } catch (error) {
    console.log(error);
  }
}

export const removeFromSchedule = (id) => async (dispatch) => {
  try {
    await api.removeFromSchedule(id);
    return (data)
    // dispatch({ type: 'REMOVE_FROM_SCHEDULE', payload: id });
  } catch (error) {
    console.log(error);
  }
}
