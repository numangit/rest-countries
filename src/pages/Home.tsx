import { Countries } from '../components/home/Countries'
import Header from '../components/home/Header'

export default function Home() {
  return (
    <div className='bg-slate-100 h-screen container mx-auto px-4'>
      <Header />
      <Countries />
    </div>
  )
}
