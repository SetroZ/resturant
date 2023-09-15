<<<<<<< HEAD
import Featured from '@/components/Featured'
import Offer from '@/components/Offer'
import Slider from '@/components/Slider'

export default function Home() {
  return (
    <main>
      <Slider/>
      <Featured/>
      <Offer/>
=======
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

>>>>>>> bafeda57f5e1fa8e7486b9ea5a01b80a8902d083
    </main>
  )
}
