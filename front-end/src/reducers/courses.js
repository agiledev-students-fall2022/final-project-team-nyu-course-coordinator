export default (state = { courses: [] }, action) => {
  
  switch (action.type) {
    case "FETCH_ALL":
      console.log(...state, action.payload)
      return {
        ...state,
        courses: action.payload,
      };
    case "CREATE":
      return { ...state, courses: [...state.courses, action.payload] };
    case "DELETE":
      return { ...state, courses: state.courses.filter((course) => course._id !== action.payload) };
    case "UPDATE":
      return { ...state, courses: state.courses.map((course) => (course._id === action.payload._id ? action.payload : course)) };
    default:
      return state;
  }
}