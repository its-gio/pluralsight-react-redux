const initialState = {
  courses: [],
};

// Actions
const CREATE_COURSE = "CREATE_COURSE";

// Export Functions
export function createCourse(course) {
  return { type: CREATE_COURSE, payload: course };
}

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_COURSE:
      return {
        ...state,
        courses: [...state.courses, action.payload],
      };

    default:
      return state;
  }
}
