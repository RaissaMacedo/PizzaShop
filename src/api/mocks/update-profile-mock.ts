import { http, HttpResponse } from 'msw'
import { UpdateProfileBody } from '../update-profile'

export const UpdateProfileMock = http.put<never, UpdateProfileBody>('/profile', async ({ request }) => {
  const { name } =  await request.json()

  if (name === 'Raissa Pizza') {
    return new HttpResponse(null, {
      status: 204,    
    })
  }
  // devolve corpo da requisicao e o status
  return new  HttpResponse(null, { status: 400 })
})