import Featured from '@/components/Main/Featured'
import Offer from '@/components/Main/Offer'
import Slider from '@/components/Main/Slider'
import Image from 'next/image'

export default function Home() {
  return (
    <main className="">
      <Slider/>
      <Featured/>
      <Offer/>

    </main>
  )
}
