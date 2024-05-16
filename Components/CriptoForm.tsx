import {FormEvent, useState} from "react"
import {currencies} from "../data"
import {Pair} from "../types"
import {useCriptoStore} from "../Store"
import ErrorMessage from "./ErrorMessage"

const CriptoForm = () => {
  const criptocurrencies = useCriptoStore((state) => state.criptocurrencies)
  const fetchData = useCriptoStore((state) => state.fetchData)

  const [pair, setPair] = useState<Pair>({
    currency: "",
    criptocurrency: "",
  })

  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setPair({
      ...pair,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (Object.values(pair).includes("")) {
      //Validamos los Campos Vacios En el Formulario
      setError("Todos los Campos son Obligatorios")
      return
    }
    setError("")
    fetchData(pair)
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="field">
          <label htmlFor="criptocurrency">Criptomoneda:</label>
          <select
            name="criptocurrency"
            id="criptocurrency"
            value={pair.criptocurrency}
            onChange={handleChange}
          >
            <option value=""> - - Selecione - - </option>
            {criptocurrencies.map((cripto) => (
              <option value={cripto.CoinInfo.Name} key={cripto.CoinInfo.Name}>
                {cripto.CoinInfo.FullName}
              </option>
            ))}
          </select>
        </div>

        <div className="field">
          <label htmlFor="currency">Moneda:</label>
          <select
            name="currency"
            id="currency"
            value={pair.currency}
            onChange={handleChange}
          >
            <option value="">- - Seleccione - - </option>
            {currencies.map((currencie) => (
              <option key={currencie.code} value={currencie.code}>
                {currencie.name}
              </option>
            ))}
          </select>
        </div>

        {error && <ErrorMessage>{error}</ErrorMessage>}
        <input type="submit" value={"Cotizar"} />
      </form>
    </>
  )
}
export default CriptoForm
