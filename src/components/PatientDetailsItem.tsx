type PatientDetailsItemProps = {
    label: string
    data: string
}

const PatientDetailsItem = ({label, data} : PatientDetailsItemProps) => {
  return (
    <p className="font-bold mb-2 text-gray-700 uppercase text-base">
        {label}: {''}
        <span className="font-normal normal-case text-sm">{data}</span>
    </p>
  )
}

export default PatientDetailsItem