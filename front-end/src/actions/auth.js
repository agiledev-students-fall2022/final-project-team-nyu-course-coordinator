import * as api from '../api/index.js';

export const signin = (formData, history) => async (dispatch) => {
  try {
    // log in the user
    const { data } = await api.signin(formData);

    dispatch({ type: 'AUTH', data });

    history.push('/');
  } catch (error) {
    console.log(error);
  }
}

export const signup = (formData, history) => async (dispatch) => {
  try {
    // sign up the user
    const { data } = await api.signup(formData);

    dispatch({ type: 'AUTH', data });

    history.push('/');
  } catch (error) {
    console.log(error);
  }
}
