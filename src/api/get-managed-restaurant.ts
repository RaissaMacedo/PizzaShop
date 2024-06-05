import { api } from "@/lib/axios";
export interface GetManagerRestarauntResponse {
  id: string;
    name: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    description: string | null;
    managerId: string | null;
}
export async function getManagerRestaraunt() {
  const response = await api.get<GetManagerRestarauntResponse>("/managed-restaurant")
  return response.data
}