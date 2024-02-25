import { Button } from '../components/Button'

export default function Home() {
  return (
    <main className="flex w-full flex-1 flex-col items-center justify-center">
      <div className="container flex flex-col items-center justify-center gap-6">
        <Button href="/view">Click here</Button>
      </div>
    </main>
  )
}