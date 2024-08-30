import { create } from 'zustand'
import { devtools, persist } from 'zustand/middleware'
import { DraftPatient, Patient } from './types'
import { v4 as uuidv4} from 'uuid'


type PatientState ={
    patients: Patient[],
    activeId: Patient['id']
    savePatient: (data: DraftPatient) => void
    removePatient: (id:Patient['id']) => void
    getPatientById: (id:Patient['id']) => void
    updatedPatient: (data: DraftPatient) => void
}

const createPatient = (patient: DraftPatient) : Patient =>{
    return {...patient, id : uuidv4()}
}

export const usePatientStore = create<PatientState>()(
    devtools(
        persist( (set) => ({
        patients: [],
        activeId: '',
        savePatient: (data) => {
            const newPatient = createPatient(data)
            set((state) =>({
                patients: [...state.patients, newPatient]
            }))
        },
        removePatient: (id) =>{
            set((state) =>({
                patients: state.patients.filter(patient => patient.id !== id)
            }))
           
        },
        getPatientById: (id) =>{
            set(() =>({
                activeId: id
            }))
        },
        updatedPatient: (data) =>{
            set((state) =>({
                patients: state.patients.map(patient => patient.id === state.activeId 
                    ? {id:state.activeId, ...data} 
                    : patient),
                    activeId: ''
            }))
        }
    }), {
        name: 'patient-storage'
    })
))