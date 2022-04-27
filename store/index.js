import { combineReducers, createStore } from 'redux';

import PersonaReducer from './reducers/persona.reducer';

const RootReducer = combineReducers({
    personas: PersonaReducer
});

export default createStore(RootReducer);