import { HttpResponse, http } from "msw";
import { GetManagerRestarauntResponse } from "../get-managed-restaurant";

export const getManagedRestaurantMock = http.get<
      never, 
      never, 
      GetManagerRestarauntResponse
    >('/manager-restaurant', 
    () => {
    return HttpResponse.json({
      id: '123456',
      name: 'Pizza da raissa',
      description: 'testando o mock',
      managerId: 'teste',
      createdAt: new Date(),
      updatedAt: null,
    })
  }
)