import { HttpResponse, http } from "msw";
import { GetProfileResponse } from "../get-profile";

export const getProfileMock = http.get<
      never, 
      never, 
      GetProfileResponse
    >('/me', 
    () => {
    return HttpResponse.json({
      id: '123456',
      name: 'raissa',
      email: 'raissa@raissa.com',
      phone: '45988181213',
      role: 'manager',
      createdAt: new Date(),
      updatedAt: null,
    })
  }
)