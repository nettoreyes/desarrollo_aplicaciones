export const SELECCIONAR_PERSONA = 'SELECCIONAR_PERSONA';

export const seleccionarPersona = (id) => ({
    type: SELECCIONAR_PERSONA,
    personaID: id
})