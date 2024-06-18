import { HttpResponse, http } from "msw";
import {  GetOrderDetailsParams, GetOrderDetailsResponse } from "../get-order.details";

export const getOrderDetailsMock = http.get<
      GetOrderDetailsParams, 
      never, 
      GetOrderDetailsResponse
    >('/orders/:orderId', 
    ({ params }) => {
    return HttpResponse.json({
      id: params.orderId,
      customer: {
        name: 'Raissa M',
        email: 'raissamacedo@gmail.com',
        phone: '45878788888',
      },
      status: 'pending',
      createdAt: new Date().toISOString(),
      totalInCents: 5000,
      orderItems: [
        {
          id: 'order-item-1',
          priceInCents: 1000,
          product: { name: 'Pizza calabresa'},
          quantity: 4,
        },
        {
          id: 'order-item-2',
          priceInCents: 200,
          product: { name: 'Pizza carbonita'},
          quantity: 5,
        },
      ],
    })
  }
)