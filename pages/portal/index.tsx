import { FiLogOut } from 'react-icons/fi'
import Link from 'next/link'
import { useEffect, useState } from 'react'

import type Directus from '@/types/Directus'

import Navbar from '@/components/Navbar'
import User from '@/components/portal/User'

export default function Index({ API }: { API: Directus }) {
  const [me, setMe] = useState()

  useEffect(() => {
    API.users.me.read()
      .then((data: any) => setMe(data))
      .catch(() => window.location.replace('/portal/login'))
  }, [API])

  return (
    <>
      <Navbar />

      <div className='mt-16 mx-auto container'>
        <User me={me} />
      </div>
    </>
  )
}
