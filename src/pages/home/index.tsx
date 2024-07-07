import { Helmet } from 'react-helmet'
import Dashboard from '@/components/dashboard'

export default function Home() {
  return (
    <>
      <Helmet>
        <title>{'Kui bu'}</title>
      </Helmet>
      <Dashboard />
    </>
  )
}
