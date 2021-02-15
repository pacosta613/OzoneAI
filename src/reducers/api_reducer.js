var DEFAULT_STATE = {
    auth:          {},
    token: 			{}
}

const auth = (state, action) => {
    let newState        = {};
    Object.assign(newState, state, action.payload);

    return newState;
}

export default function(state = DEFAULT_STATE, action) {
    switch(action.type) {
        case 'LOGIN':
            return auth(state, action);
        default:
            return state;
    }

}