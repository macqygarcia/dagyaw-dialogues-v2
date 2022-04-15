import Header from '../../components/Header'
import { useRouter } from 'next/router'

export default function Region() {
  const router = useRouter()
  const { id } = router.query

  return (
    <div>
      <Header title={`${id}- Dagyaw Dialogues`} />

      <main className="grid w-full h-screen place-items-center">
        <h1 className="font-bold text-blue-700 text-7xl">Region Page</h1>
      </main>
    </div>
  )
}
