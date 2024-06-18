import { env } from '@/env'
import { setupWorker } from 'msw/browser'
import { SignInMock } from './sign-in-mock'
import { RegisterRestaurantMock } from './register-restaurant-mock'
import { getDayOrdensAmountMock } from './get-day-orderns-amount-mock'
import { getMonthOrdensAmountMock } from './get-month-orderns-amount-mock'
import { getMonthCanceledOrdensAmountMock } from './get-month-canceled-orderns-amount-mock'
import { getMonthRevenueMock } from './get-month-revenue-mock'
import { getPopularProductsMock } from './get-popular-products-mock'
import { getDailyRevenueInPeriodMock } from './get-daily-revenue-in-period-mock'
import { getProfileMock } from './get-profile-mock'
import { getManagedRestaurantMock } from './get-managed-restaurant-mock'
import { UpdateProfileMock } from './update-profile-mock'
import { getOrdersMock } from './get-orders-mock'
import { getOrderDetailsMock } from './get-order-details.mock'
import { approveOrderMock } from './approve-order-mock'
import { cancelOrderMock } from './cancel-order-mock'
import { deliverOrderMock } from './deliver-order-mock'
import { dispatchOrderMock } from './dispatch-order-mock'

export const worker = setupWorker(
  SignInMock, 
  RegisterRestaurantMock,
  getDayOrdensAmountMock,
  getMonthOrdensAmountMock,
  getMonthCanceledOrdensAmountMock,
  getMonthRevenueMock,
  getPopularProductsMock,
  getDailyRevenueInPeriodMock,
  getProfileMock,
  getManagedRestaurantMock,
  UpdateProfileMock,
  getOrdersMock,
  getOrderDetailsMock,
  approveOrderMock,
  cancelOrderMock,
  deliverOrderMock,
  dispatchOrderMock,
  )

export async function enableMSW() {
  if(env.MODE !== 'test') {
    return
  }
  await worker.start()
}