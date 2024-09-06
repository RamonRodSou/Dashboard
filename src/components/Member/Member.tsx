'use client'
import { User } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Avatar, AvatarImage } from "../ui/avatar"
import { AvatarFallback } from "@radix-ui/react-avatar"
import { useUserContext } from "@/context"
import { useEffect } from "react"
import { GetUsers } from "@/service/Get"

function Member() {

  const { users, setUsers } = useUserContext();

  useEffect(() => {
    const fetchData = async () => {
      const response = await GetUsers();
      if (response) {
        setUsers(response);
      } else {
        console.error('Não foi possível carregar os usuários.');
      }
    };

    fetchData();
  }, [setUsers]);

  console.log(users)

  return (
    <Card className="w-full md:w-1/2 h-[400px] md:max-w-[600] md:h-[600px]  ">
      <CardHeader>
        <div className="flex items-center justify-center gap-4" >
          <CardTitle className="text-lg sm:text-xl text-gray-800">
            Últimos membros
          </CardTitle>
          <User className="ml-auto w-4 h-4" />
        </div>
        <div className="flex items-center justify-between gap-4" >
          <CardDescription>
            Novos membros no mês
          </CardDescription>
          <span>
            <p className="text-base sm:text-lg font-bold ">12</p>
          </span>
        </div>
      </CardHeader>

      <CardContent className=" overflow-auto  overflow-y-scroll h-[65%] md:h-[75%] m-4">

        {users.map((user) => (
          <article className="flex items-center gap-2 border-b py-2">
            <Avatar className="w-8 h-8 sm:w-10 sm:h-10 " >
              <AvatarImage src="https://avatars.githubusercontent.com/u/117538661?v=4" />
              <AvatarFallback>MB</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm sm:text-base font-semibold">{user.nome}</p>
              <span className="text-[12px] sm:text-sm text-gray-400">{user.telefone}</span>
            </div>
          </article>
        ))}

      </CardContent>
    </Card>
  )
}

export default Member