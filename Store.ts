import {create} from "zustand"
import {CryptoCurrency, Pair, CryptoPrice} from "./types/index"
import {devtools} from "zustand/middleware"
import {getCryptos, fetchCurrentCryptoPrice} from "./services/CryptoServices"

type CryptoStore = {
  criptocurrencies: CryptoCurrency[]
  result: CryptoPrice
  loading: boolean
  fetchCryptos: () => Promise<void>
  fetchData: (pair: Pair) => Promise<void>
}

export const useCriptoStore = create<CryptoStore>()(
  devtools((set) => ({
    criptocurrencies: [], //state inicial de las criptomonedas,
    result: {
      IMAGEURL: "",
      PRICE: "",
      HIGHDAY: "",
      LOWDAY: "",
      CHANGEPCT24HOUR: "",
      LASTUPDATE: "",
    },
    loading: false,
    fetchCryptos: async () => {
      let criptocurrencies = await getCryptos()
      set(() => ({
        criptocurrencies,
      }))
    },
    fetchData: async (pair) => {
      set(() => ({
        loading: true,
      }))
      const result = await fetchCurrentCryptoPrice(pair)
      set(() => ({
        result,
        loading: false,
      }))
    },
  }))
)
