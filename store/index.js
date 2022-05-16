import { applyMiddleware, combineReducers, createStore } from 'redux';

import PersonaReducer from './reducers/persona.reducer';
import thunk from 'redux-thunk'

const RootReducer = combineReducers({
    personas: PersonaReducer
});

export default createStore(RootReducer, applyMiddleware(thunk));