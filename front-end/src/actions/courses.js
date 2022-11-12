import * as api from '../api/index.js';

// action creators
export const getCourses = () => async (dispatch) => {
  try {
    const { data } = await api.fetchCourses();
    dispatch({ type: 'FETCH_ALL', payload: data });
  } catch (error) {
    console.log(error.message);
  }
}

// export const getSections = () => async (dispatch) => {
//   try {
//     const { data } = await api.fetchSections();
//     dispatch({ type: 'FETCH_ALL', payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }
// }s

export const createCourse = (course) => async (dispatch) => {
  try {
    const { data } = await api.createCourse(course);
    dispatch({ type: 'CREATE', payload: data });
  } catch (error) {
    console.log(error);
  }
}

export const deleteCourse = (id) => async (dispatch) => {
  try {
    await api.deleteCourse(id);
    dispatch({ type: 'DELETE', payload: id });
  } catch (error) {
    console.log(error);
  }
}

export const changeSection = (id) => async (dispatch) => {
  try {
    const { data } = await api.changeSection(id);
    dispatch({ type: 'CHANGE', payload: data });
  } catch (error) {
    console.log(error);
  }
}

export const getUsers = async () => {
  try {
    const { data } =await api.fetchUsers()
  // axios.get ("http://localhost:3001/users")
  // .then(res => {
  //   console.log("hello")
  //   console.log("DATA",res.data)
  console.log(data)
  return(data)
    // dispatch({ type: 'FETCH_ALL', payload: data })
  }
  catch (error) {
    console.log(error.message);
  }
}
