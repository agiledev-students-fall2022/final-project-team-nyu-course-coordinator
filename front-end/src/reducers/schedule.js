export default (state = { sections: [] }, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return {
        ...state,
        sections: action.payload,
      };
    case "CREATE":
      return { ...state, sections: [...state.sections, action.payload] };
    case "DELETE":
      return { ...state, sections: state.sections.filter((section) => course._id !== action.payload) };
    case "UPDATE":
      return { ...state, sections: state.sections.map((section) => (section._id === action.payload._id ? action.payload : course)) };
    default:
      return state;
  }
}