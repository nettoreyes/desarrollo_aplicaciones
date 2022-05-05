import { ELIMINA_PERSONA, GUARDA_PERSONA, MODIFICA_PERSONA, SELECCIONAR_PERSONA } from '../actions/persona.action';

import { PERSONAS } from '../../data/personas';

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
        case GUARDA_PERSONA:                       
            return {
                ...state, personas: [...state.personas, action.persona]
            };        
        case MODIFICA_PERSONA:              
            const personasEditado = state.personas.map(persona => persona.id === action.persona.id ?  action.persona : persona);          
            return {
                ...state, personas: personasEditado
            };

        case ELIMINA_PERSONA:              
            const personasElimina = state.personas.filter(persona => persona.id !== action.personaID);          
            return {
                ...state, personas: personasElimina
            };

        default:
            return state;
    }
}

export default PersonaReducer;