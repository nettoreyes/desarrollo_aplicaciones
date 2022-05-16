import { deletePersona, getPersonas, insertPersona } from '../../db';

export const CARGA_PERSONAS = 'CARGA_PERSONAS';
export const SELECCIONAR_PERSONA = 'SELECCIONAR_PERSONA';
export const GUARDA_PERSONA = 'GUARDA_PERSONA';
export const MODIFICA_PERSONA = 'MODIFICA_PERSONA';
export const ELIMINA_PERSONA = 'ELIMINA_PERSONA';


export const cargaPersonas = () => {
    return async (dispatch) => {        
        const personas = await getPersonas();        
        dispatch({ type: CARGA_PERSONAS, payload: personas.rows._array });
    }
}

export const seleccionarPersona = (id) => ({
    type: SELECCIONAR_PERSONA,
    personaID: id
})

export const guardarPersona = ( nuevaPersona ) =>   {   
    return async dispatch => {                
         const result = await insertPersona(nuevaPersona.value, 'sin imagen');         
         dispatch({type: GUARDA_PERSONA, payload: {id: result.insertId, value: nuevaPersona.value}})
    }
}
    // ({type: GUARDA_PERSONA,
    // persona: nuevaPersona})


export const modificaPersona = ( personaModificada ) => ({    
    type: MODIFICA_PERSONA,
    persona: personaModificada
})

// export const eliminaPersona = (id) => ({
//     type: ELIMINA_PERSONA,
//     personaID: id
// })

export const eliminaPersona = (id) => {
    return async dispatch => {
        try {
            const result = await deletePersona(id);            
            dispatch({type: ELIMINA_PERSONA, personaID: id});
        } catch(err) {
            throw err;
        }
    }
} 

