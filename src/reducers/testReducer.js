const initialState = {
  i: 0
};

const testReducer = (prevState = initialState, action) => {
  //var _tasks = prevState.tasks;
  switch (action.type) {
    case "INCREMENT":
      return { ...prevState, i: prevState.i + 1 };
    case "DECREMENT":
      return {
        ...prevState,
        i: prevState.i - 1
      };
    default:
      return prevState;
  }
};

export default testReducer;
