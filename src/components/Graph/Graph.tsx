"use client"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
import { ChartConfig, ChartContainer, ChartLegend, ChartLegendContent, ChartTooltip, ChartTooltipContent } from "../ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

function Graph() {

 const chartData = [
  { month: "Janeiro", domingo: "500.00", quarta: "140", contas:"400.00" },
  { month: "Fevereiro", domingo: "600.00", quarta: "140", contas:"500.00" },
  { month: "Março", domingo: "400.00", quarta: "340", contas:"400.00"},
  { month: "Abril", domingo: "200.00", quarta: "540", contas:"200.00"},
  { month: "Maio", domingo: "850.00", quarta: "140", contas:"840.00"},
  { month: "Junho", domingo: "500.00", quarta: "140", contas:"600.00"},
  { month: "Julho", domingo: "900.00", quarta: "640", contas:"500.00"},
  { month: "Agosto", domingo: "310.00", quarta: "640", contas:"600.00"},
  { month: "Setembro", domingo: "550.00", quarta: "860", contas:"1000.00"},
  { month: "Outubro", domingo: "570.00", quarta: "420", contas:"800.00"},
  { month: "Novembro", domingo: "750.00", quarta: "250", contas:"800.00"},
  { month: "Dezembro", domingo: "500.00", quarta: "240", contas:"500.00"},
 ].map(data => {
    const soma = parseFloat(data.domingo) + parseFloat(data.quarta);
    const saldo = soma - parseFloat(data.contas);
    return {
      ...data,
      soma: soma.toFixed(2),
      saldo: saldo.toFixed(2),
    }
  })
 
const chartConfig = {
  domingo: {
    label: "domingo",
    color: "#2563eb",
  },
  quarta: {
    label: "quarta",
    color: "#60a5fa",
  },
  soma: {
    label: "soma",
    color: "#1222ff",
  },
  contas: {
    label: "contas",
    color: "#ff8111",
  },
  saldo: {
    label: "saldo",
    color: "#008111",
  },
} satisfies ChartConfig

  return (
    <Card className="w-full md:w-1/2 md:max-w-[600]">
      <CardHeader>
       <div className="flex items-center justify-center">
        <CardTitle className="text-lg sm:text-xl test-gray-800">
         Overview ofertas
        </CardTitle>
       </div>
      </CardHeader>
      <CardContent>
       <ChartContainer config={chartConfig} className="min-h[200px] w-full">
        <BarChart data={chartData}>
         <CartesianGrid vertical={false}/>
         <XAxis
          dataKey="month"
          tickLine={false}
          tickMargin={10}
          axisLine={false}
          tickFormatter={(value) => value.slice(0, 3)}
         />
        <ChartTooltip content={<ChartTooltipContent />} />
        <ChartLegend content={<ChartLegendContent />} />
        
         <Bar dataKey="domingo" fill={chartConfig.domingo.color} />
         <Bar dataKey="quarta" fill={chartConfig.quarta.color} />
         <Bar dataKey="soma" fill={chartConfig.soma.color} />
         <Bar dataKey="contas" fill={chartConfig.contas.color} />
         <Bar dataKey="saldo" fill={chartConfig.saldo.color} />

        </BarChart>
       </ChartContainer>
      </CardContent>
    </Card>
  )
}

export default Graph