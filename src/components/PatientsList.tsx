import { usePatientStore } from "../store"
import PatientDetails from "./PatientDetails"


const PatientsList = () => {
  const patients = usePatientStore(state => state.patients)
  return (
    <div className="md:w-1/2 lg:w-3/5 mx-5  ">
      {
        patients.length ? 
        <>
       
        <div>
          <h2 className="font-black text-center text-2xl">Listado de pacientes</h2>
          <p className="text-center font-bold text-lg mt-2 mb-10">Administra tus {''}
              <span className="text-fuchsia-600">Pacientes y Citas</span>
          </p>
        </div> 
        <div className="md:h-screen overflow-y-scroll">
          {
            patients.map(patient => (
              <PatientDetails
                key={patient.id}
                patient={patient}
              />
            ))
          }
        </div>
        </>
      
        
        :
        <>  
          <h2 className="font-black text-center text-2xl">No hay pacientes</h2>
          <p className="text-center font-bold text-lg mt-2 mb-10">Comienza agregando pacientes {''}
              <span className="text-fuchsia-600">y apareceran aquí</span>
          </p>
        </>

      }
    
    
    
    
</div>
  )
}

export default PatientsList
