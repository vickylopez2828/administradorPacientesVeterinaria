

const Error = ({children}: {children: React.ReactNode}) => {
  return (
    <p className="p-1 mt-2 text-center bg-red-600 text-white font-bold  uppercase text-sm">
      {children}
    </p>
  )
}

export default Error
