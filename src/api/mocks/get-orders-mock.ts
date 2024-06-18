import { HttpResponse, http } from "msw";
import type { GetOrdersResponse } from "../get-orders";

type Orders = GetOrdersResponse['orders']
type OrderStatus = GetOrdersResponse['orders'][number]['status']

const statuses: OrderStatus[] = [
  'pending',
  'processing',
  'canceled',
  'delivered',
  'delivering',
]
const orders: Orders = Array.from({ length: 60}).map((_, i) => {
    return {
      orderId: `order-${i + 1}`,
      customerName: `Customer ${i +1}`,
      createdAt: new Date().toISOString(),
      total: 2400,
      status: statuses[i % 5],
         
    }

})
export const getOrdersMock = http.get<never, never, GetOrdersResponse>(
  '/orders',
  async ({ request}) => {
    const { searchParams} = new URL(request.url)

    const pageIndex = searchParams.get('pageIndex')
    ? Number(searchParams.get('pageIndex'))
    : 0

    const customerName = searchParams.get('customerName')
    const orderId = searchParams.get('orderId')
    const status = searchParams.get('status')
    
    let filtersOrders = orders

    if (customerName) {
      filtersOrders = filtersOrders.filter((order) => 
        order.customerName.includes(customerName),
      )
    }

    if (orderId) {
      filtersOrders = filtersOrders.filter((order) => 
        order.orderId.includes(orderId),
      )
    }

    if (status) {
      filtersOrders = filtersOrders.filter((order) => 
        order.status === status
      )
    }

    const paginateOrders = filtersOrders.slice(
      pageIndex * 10,
      (pageIndex + 1) * 10,
    )

    return HttpResponse.json({
      orders: paginateOrders,
      meta: {
        pageIndex,
        perPage: 10,
        totalCount: filtersOrders.length
      }
    })
  },
)