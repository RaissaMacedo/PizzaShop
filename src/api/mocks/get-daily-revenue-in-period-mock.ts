import { HttpResponse, http } from "msw";
import { GetDailyRevenueInPeriodResponse } from "../get-daily-revenue-in-period";

export const getDailyRevenueInPeriodMock = http.get<
    never, 
    never, 
    GetDailyRevenueInPeriodResponse
  >('/metrics/daily-receipt-in-period', () => {
  return HttpResponse.json([
    { date: '04/04/1996', receipt: 2000},
    { date: '04/04/2005', receipt: 3000},
    { date: '04/04/1997', receipt: 2000},
    { date: '04/04/2000', receipt: 2000},
    { date: '04/04/2024', receipt: 2000},
  ])
})