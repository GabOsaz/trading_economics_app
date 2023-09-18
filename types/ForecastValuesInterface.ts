export default interface ForecastValuesInterface {
  data: ForecastTypes[] | undefined
  isLoading: boolean
}

interface ForecastTypes {
  Country: string
  Category: string
  Title: string
  LatestValue: number
  LatestValueDate: string
  q1: number
  q2: number
  q3: number
  q4: number
  YearEnd: number
  YearEnd2: number
  YearEnd3: number
  q1_date: string
  q2_date: string
  q3_date: string
  q4_date: string
  Frequency: string
  Unit: string
  HistoricalDataSymbol: string
}
