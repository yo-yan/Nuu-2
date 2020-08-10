import { ADD_EVENT, DELETE_ALL_EVENT } from '../actions/index'

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_EVENT:
            const event = { title: action.title, body: action.body, comment: action.comment };
            const id = state.length + 1;
            return [...state, { id, ...event }];
        case DELETE_ALL_EVENT:
            return [];
        default:
            return state;
    }
};

export default reducer;