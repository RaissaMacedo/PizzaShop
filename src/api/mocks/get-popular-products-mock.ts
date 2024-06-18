import { HttpResponse, http } from "msw";
import { GetPopularProducts } from "../get-popular-products";

export const getPopularProductsMock = http.get<
    never, 
    never, 
    GetPopularProducts
  >('/metrics/popular-products', () => {
  return HttpResponse.json([
    { product: 'Pizza 01', amount: 10},
    { product: 'Pizza 05', amount: 10},
    { product: 'Pizza 08', amount: 10},
    { product: 'Pizza 02', amount: 100},
  ])
})