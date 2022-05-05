export const SELECCIONAR_PERSONA = 'SELECCIONAR_PERSONA';
export const GUARDA_PERSONA = 'GUARDA_PERSONA';
export const MODIFICA_PERSONA = 'MODIFICA_PERSONA';
export const ELIMINA_PERSONA = 'ELIMINA_PERSONA';

export const seleccionarPersona = (id) => ({
    type: SELECCIONAR_PERSONA,
    personaID: id
})

export const guardarPersona = ( nuevaPersona ) => ({    
    type: GUARDA_PERSONA,
    persona: nuevaPersona
})

export const modificaPersona = ( personaModificada ) => ({    
    type: MODIFICA_PERSONA,
    persona: personaModificada
})

export const eliminaPersona = (id) => ({
    type: ELIMINA_PERSONA,
    personaID: id
})

