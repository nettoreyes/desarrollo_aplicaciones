import { PERSONAS } from '../../data/personas';
import { SELECCIONAR_PERSONA } from '../actions/persona.action';

const initialState = {
    personas: PERSONAS,
    seleccionada: null,
}

const PersonaReducer = (state = initialState, action) => {
    switch (action.type) {
        case SELECCIONAR_PERSONA:            
            const indicePersona = state.personas.findIndex(persona => persona.id === action.personaID);
            if(indicePersona === -1) return state;
            return {
                ...state, seleccionada: state.personas[indicePersona]
            };
        default:
            return state;
    }
}

export default PersonaReducer;