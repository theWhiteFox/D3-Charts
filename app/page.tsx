import * as Charts from './components'

export default function Home() {
  return (

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen pb-2 gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-2 row-start-2 items-center sm:items-start">
        <h1 className="text-4xl align-middle md:align-top">Charts</h1>
        <p className="flex gap-8  flex-col sm:flex-row">This is a load of charts</p>

        <div className="flex gap-8 items-center flex-col sm:flex-row">

          <Charts.LineChart />
          <Charts.TwoLevelPieChart />

        </div>
        <div className="flex gap-8 items-center flex-col sm:flex-row">

          <Charts.BarChart />
          <Charts.SimpleRadarChart />

        </div>
      </main>
    </div>

  );
}
