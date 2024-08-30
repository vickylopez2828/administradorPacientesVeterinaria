import { toast } from "react-toastify"
import { usePatientStore } from "../store"
import { Patient } from "../types"
import PatientDetailsItem from "./PatientDetailsItem"

type PatientDetailsProps ={
    patient: Patient
}

const PatientDetails = ({patient} : PatientDetailsProps) => {
    const removePatient = usePatientStore(state => state.removePatient)
    const getPatientById = usePatientStore(state => state.getPatientById)
    
    const handleClick = () =>{
        removePatient(patient.id)
        toast.error('Paciente Eliminado Correctamente',{autoClose: 2000})
    }
  return (
    <div className="bg-white shadow-md rounded-xl mb-10 px-5 py-10 mx-5 ">
        <PatientDetailsItem label="id" data={patient.id}/>
        <PatientDetailsItem label="Nombre" data={patient.name}/>
        <PatientDetailsItem label="Propietario" data={patient.caretaker}/>
        <PatientDetailsItem label="email" data={patient.email}/>
        <PatientDetailsItem label="fecha de alta" data={patient.date.toString()}      />
        <PatientDetailsItem label="síntomas" data={patient.symptoms}/>
        <div className="flex flex-col lg:flex-row justify-between mt-10 gap-3  ">
            <button
                type="button" 
                className="bg-indigo-600 hover:bg-indigo-700 rounded-lg px-10 py-2 text-white uppercase text-center font-bold"
                onClick={() =>getPatientById(patient.id)}
            >
                Editar
            </button>
            <button 
                type="button" 
                className="bg-red-600 hover:bg-red-700 rounded-lg px-10 py-2 text-white uppercase text-center font-bold"
                onClick={handleClick}
            >
                Eliminar
            </button>
        
        </div>
      

    </div>
  )
}

export default PatientDetails
