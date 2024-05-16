import {useMemo} from "react"
import {useCriptoStore} from "../Store"
import Spinner from "./Spinner"

const CriptoDisplay = () => {
  const result = useCriptoStore((store) => store.result)
  const hasResult = useMemo(() => !Object.values(result).includes(""), [result])
  const loading = useCriptoStore((store) => store.loading)

  return (
    <>
      <div className="result-wrapper">
        {loading ? (
          <Spinner />
        ) : (
          hasResult && (
            <>
              <h2>Cotizacion</h2>
              <div className="result">
                <img
                  src={`https://cryptocompare.com/${result.IMAGEURL}`}
                  alt="imagen Cryptomoneda"
                />

                <div>
                  <p>
                    El precio es de: <span>{result.PRICE}</span>
                  </p>
                  <p>
                    Precio mas Alto del Dia: <span>{result.HIGHDAY}</span>
                  </p>
                  <p>
                    Precio mas Bajo del Dia: <span>{result.LOWDAY}</span>
                  </p>
                  <p>
                    Variacion ultimas 24 Horas:{" "}
                    <span>{result.CHANGEPCT24HOUR}</span>
                  </p>
                  <p>
                    Ultima Actualizacion: <span>{result.LASTUPDATE}</span>
                  </p>
                </div>
              </div>
            </>
          )
        )}
      </div>
    </>
  )
}

export default CriptoDisplay
