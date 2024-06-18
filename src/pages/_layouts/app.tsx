import { Header } from '@/components/header'
import { api } from '@/lib/axios'
import { isAxiosError } from 'axios'
import { error } from 'console'
import { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export function AppLayout() {
  const navigate = useNavigate()

  useEffect(() => {
    // interceptando todas as respostas da api
    const interceptorId = api.interceptors.response.use(
      (response) => response,
      (error) => {
        if (isAxiosError(error)) {
          const status = error.response?.status
          // code retorna qual erro
          const code = error.response?.data.code

          if (status === 401 && code === 'UNAUTHORIZED') {
            navigate('/sign-in', { replace: true})
          } else {
            throw error
          }
        }
      },
    )

    return () => {
      // limpando o listen no final
      api.interceptors.response.eject(interceptorId)
    }
  }, [navigate])
  return (
    <div className='flex min-h-screen flex-col antialiased'>
     <Header/>
    <div className='flex flex-1 flex-col gap-4 p-8 pt-6'>
      <Outlet />
    </div>
    </div>
  )
}
