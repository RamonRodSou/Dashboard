import { User } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card"
import { Avatar, AvatarImage } from "../ui/avatar"
import { AvatarFallback } from "@radix-ui/react-avatar"

function Member() {
 return (
  <Card className="w-full md:w-1/2 md:max-w-[600]">
   <CardHeader>
    <div className="flex items-center justify-center gap-4" >
     <CardTitle className="text-lg sm:text-xl text-gray-800">
      Últimos membros
     </CardTitle>
     <User className="ml-auto w-4 h-4" />
    </div>
    <CardDescription>
     Novos membros no mês
    </CardDescription>
   </CardHeader>

    <CardContent>

     <article className="flex items-center gap-2 border-b py-2">
      <Avatar className="w-8 h-8 sm:w-10 sm:h-10 " >
       <AvatarImage src="https://avatars.githubusercontent.com/u/117538661?v=4"/>
       <AvatarFallback>MB</AvatarFallback>
      </Avatar>
      <div className="flex-1">
       <p className="text-sm sm:text-base font-semibold">Ramon Rodrigues</p>
       <span className="text-[12px] sm:text-sm text-gray-400">21972923210</span>
      </div>
     </article>

     <article className="flex items-center gap-2 border-b py-2">
      <Avatar className="w-8 h-8 sm:w-10 sm:h-10 " >
       <AvatarImage src="https://avatars.githubusercontent.com/u/117538661?v=4"/>
       <AvatarFallback>MB</AvatarFallback>
      </Avatar>
      <div className="flex-1">
       <p className="text-sm sm:text-base font-semibold">Ramon Rodrigues</p>
       <span className="text-[12px] sm:text-sm text-gray-400">21972923210</span>
      </div>
     </article>

     <article className="flex items-center gap-2 border-b py-2">
      <Avatar className="w-8 h-8 sm:w-10 sm:h-10 " >
       <AvatarImage src="https://avatars.githubusercontent.com/u/117538661?v=4"/>
       <AvatarFallback>MB</AvatarFallback>
      </Avatar>
      <div className="flex-1">
       <p className="text-sm sm:text-base font-semibold">Ramon Rodrigues</p>
       <span className="text-[12px] sm:text-sm text-gray-400">21972923210</span>
      </div>
     </article>

     
    </CardContent>
  </Card>
 )
}

export default Member