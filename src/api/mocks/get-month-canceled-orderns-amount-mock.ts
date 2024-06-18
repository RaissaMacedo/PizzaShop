import { HttpResponse, http } from "msw";
import { GetMonthCanceledOrdersAmountResponse } from "../get-month-canceled-orders-amount";

export const getMonthCanceledOrdensAmountMock = http.get<
    never, 
    never, 
    GetMonthCanceledOrdersAmountResponse
  >('/metrics/month-canceled-orders-amount', () => {
  return HttpResponse.json({
    amount: 20,
    diffFromLastMonth: 5
  })
})