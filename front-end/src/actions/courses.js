import * as api from '../api/index.js';
// import axios from "axios"
// import {useDispatch} from 'react-redux'

// action creators
export const getCourses = async () => {
  try {
        const { data } = await api.fetchCourses();
        
        return (data)
        // dispatch({ type: 'FETCH_ALL', payload: data });

      } catch (error) {
        console.log(error.message);
      }
}
    
    //const { data } =await api.fetchCourses()
          // dispatch({ type: 'FETCH_ALL', payload: data })

    // axios.get ("http://localhost:3001/courses")
    // .then(res => {
    //   console.log("DATA",res.data)
    // })
    // .catch (error =>{
    //   console.log(error.message);
    // })


//fetchSections is not in the index
// export const getSections = () => async (dispatch) => {
//   try {
//     const { data } = await api.fetchSections();
//     dispatch({ type: 'FETCH_ALL', payload: data });
//   } catch (error) {
//     console.log(error.message);
//   }

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

export const getUsers = async (id) => {
  try {
    const { data } = await api.fetchUsers(id)
    return(data)
    // dispatch({ type: 'FETCH_ALL', payload: data })
  }
  catch (error) {
    console.log(error.message);
    console.log("This is an error")
  }
}

