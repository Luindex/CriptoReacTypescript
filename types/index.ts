import {z} from "zod"
import {
  CryptoCurrencyResponseSchema,
  CurrencySchema,
  PairSchema,
  CryptoPriceSchema,
} from "../schema/cripto-schema"

export type Currency = z.infer<typeof CurrencySchema>
export type CryptoCurrency = z.infer<typeof CryptoCurrencyResponseSchema>
export type Pair = z.infer<typeof PairSchema>
export type CryptoPrice = z.infer<typeof CryptoPriceSchema>
