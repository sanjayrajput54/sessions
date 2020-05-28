
import {createStore} from 'redux';


const initialState={
  permission:['Create']
}
function todos(state = initialState, action) {

  switch (action.type) {

    case 'SET_PERMISSION':
    return {
    ...state,
    data:{
      name:"App State"
    }
    }
    default:
    return state;

  }



    // switch (action.type) {
    //   case 'ADD_TODO':
    //     return state.concat([action.text])
    //   default:
    //     return state
    // }
  }
  

  const store = createStore(todos, initialState);

  export default store;
