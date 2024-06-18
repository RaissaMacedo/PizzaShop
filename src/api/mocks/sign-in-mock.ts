import { http, HttpResponse } from 'msw'
import { SignInBody } from '../sign-in'

export const SignInMock = http.post<never, SignInBody>('/authenticate', async ({ request }) => {
  const { email } =  await request.json()

  if (email === 'raissamacedo7@gmail.com') {
    return new HttpResponse(null, {
      status: 200,
      headers: {
        'Set-Cookie': 'auth=sample-jwt',
      }
    })
  }
  // devolve corpo da requisicao e o status
  return new  HttpResponse(null, { status: 401 })
})