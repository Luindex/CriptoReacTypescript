import {useEffect} from "react"
import CriptoForm from "./Components/CriptoForm"
import {useCriptoStore} from "./Store"
import CriptoDisplay from "./Components/CriptoDisplay"

function App() {
  const fetchCryptos = useCriptoStore((state) => state.fetchCryptos)

  useEffect(() => {
    fetchCryptos()
  }, [])

  return (
    <>
      <div className="container">
        <h1 className="title">
          Cotizador De <span>Criptomonedas</span>
        </h1>

        <div className="content">
          <CriptoForm />
          <CriptoDisplay />
        </div>
      </div>
    </>
  )
}

export default App
