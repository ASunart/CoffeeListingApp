import { CardSection } from './components/CardSection'
import { Filters } from './components/Filters'
import { Header } from './components/Header'
import { useProducts } from './hooks/useProducts'

function App() {
  const { filter, handleFilterChange, filterProducts } = useProducts()
  return (
    <>
      <Header />
      <main
        className='relative overflow-hidden bg-gray py-12 px-12 flex flex-col justify-center items-center gap-4 w-5/6 mx-auto -mt-12 my-32 z-10 rounded-2xl'>
          <img src="./vector.svg"
            className='absolute -z-10 top-6 -right-16 md:right-16 lg:right-1/3'
          />
        <section className='relative '>
          <h1 className='font-dm-sans text-[2rem] font-bold text-center text-white'>
            Our Collection
          </h1>
          <p className='font-dm-sans text-base text-center text-gray-light font-medium'>Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        </section>
        <Filters filter={filter} handleFilterChange={handleFilterChange} />
        <CardSection data={filterProducts} />
      </main>
    </>

  )
}

export default App
