import { HttpResponse, http } from "msw";
import { GetMonthOrdersAmountResponse } from "../get-month-orders-amount";

export const getMonthOrdensAmountMock = http.get<
    never, 
    never, 
    GetMonthOrdersAmountResponse
  >('/metrics/month-orders-amount', () => {
  return HttpResponse.json({
      amount: 20,
      diffFromLastMonth: -5
  })
})