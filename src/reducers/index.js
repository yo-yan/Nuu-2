import { ADD_EVENT, DELETE_ALL_EVENT, DELETE_ONE_EVENT, INCREMENT, DECREMENT, RESET, EVENT } from '../actions/index'

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_EVENT:
            const event = { title: action.title, body: action.body, comment: action.comment };
            const id = state.length + 1;
            return [...state, { id, ...event }];
        case DELETE_ALL_EVENT:
            return [];
        case DELETE_ONE_EVENT:
            const result = state.filter((data) => data.id !== action.id);
            return result;
        case INCREMENT:
            return { ...state, count: state.count + 1 };
        case DECREMENT:
            return { ...state, count: state.count - 1 };
        case RESET:
            return { ...state, count: 0 };
        case EVENT:
            if (state.count === 0) {
                return { ...state, count: state.count }
            } else if (state.count % 3 === 0) {
                return { ...state, count: state.count + 10 }
            } else {
                return { ...state, count: state.count }
            }
        default:
            return state;
    }
};

export default reducer;