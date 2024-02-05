import { Helmet } from 'react-helmet-async'

import { DayOrdersAmountCard } from './day-orders-amount'
import { MonthCanceledOrdersValueCard } from './month-canceled-amount'
import { MonthOrdersAmountCard } from './month-orders-amount'
import { MonthRevenueValueCard } from './month-revenue-value'
import { PopularProductsChart } from './popular-products'
import { RevenueChart } from './revenue-chart'

export function Dashboard() {
  return (
    <>
      <Helmet title="Login" />
      <div className=" flex flex-col gap-4">
        <h1 className=" text-3xl font-bold tracking-tight">Dashboard</h1>

        <div className=" grid grid-cols-4 gap-4">
          <MonthRevenueValueCard />
          <MonthOrdersAmountCard />
          <DayOrdersAmountCard />
          <MonthCanceledOrdersValueCard />
        </div>
        <div className=" grid grid-cols-9 gap-4">
          <RevenueChart />
          <PopularProductsChart />
        </div>
      </div>
    </>
  )
}
