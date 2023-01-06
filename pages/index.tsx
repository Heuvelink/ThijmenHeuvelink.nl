import type Directus from '@/types/Directus'

import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'

export default function Index({ API }: { API: Directus }) {

  return (
    <div className='flex flex-col min-h-screen'>
      <Navbar API={API} />

      <div className='grow' />

      <Footer API={API} />
    </div>
  )
}
