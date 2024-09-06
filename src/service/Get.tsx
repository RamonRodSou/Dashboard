
import Api from '@/model/Api'
import IPessoa from '@/model/IPessoa'

const apiUrl = `${process.env.NEXT_PUBLIC_API_URL}`
const apiUsers = new Api (apiUrl)

export async function GetUsers () {
 return await apiUsers.get<IPessoa[]>( `${apiUrl}/membros`)
}