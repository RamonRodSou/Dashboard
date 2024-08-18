import Graph from "@/components/Graph/Graph";
import Member from "@/components/Member/Member";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Component, DollarSign, Package2, Users } from "lucide-react";

export default function Home() {
  return (
    <main className="sm:ml-14 p-4" >
      <section className="grid grid-cols-2 lg:grid-cols-4 gap-4" >
        <Card>
          <CardHeader>
            <div className="flex items-center justify-center"> 
            <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
              Ofertas
            </CardTitle>
            <DollarSign className="ml-auto w-4 h-4"/>
            </div>
            <CardDescription>
              Total em 90 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">R$ 500.00</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center"> 
            <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
              Membros
            </CardTitle>
            <Users className="ml-auto w-4 h-4"/>
            </div>
            <CardDescription>
             Novos membros em 30 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">30</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center"> 
            <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
              GC's
            </CardTitle>
            <Component className="ml-auto w-4 h-4"/>
            </div>
            <CardDescription>
             Novos membros em 30 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">30</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-center"> 
            <CardTitle className="text-lg sm:text-xl text-gray-800 select-none">
              Doações
            </CardTitle>
            <Package2 className="ml-auto w-4 h-4"/>
            </div>
            <CardDescription>
             Total em 30 dias
            </CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-base sm:text-lg font-bold">30</p>
          </CardContent>
        </Card>
        
      </section>

      <section className="mt-4 flex flex-col md:flex-row gap-4">
        <Graph/>
        <Member/>
      </section>
    </main>
  );
}
