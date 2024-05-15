import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/facts.js'
import { Otro } from './components/Otro.jsx'

// const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
// const CAT_ENDPOINT_IMAGE_URL = 'https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true'
// const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

const useCatFact = () => {
  const [fact, setFact] = useState()

  const refreshFact = () => {
    getRandomFact().then(newFact => setFact(newFact))
  }

  useEffect(refreshFact, [])

  return { fact, refreshFact }
}

export function App () {
  const { fact, refreshFact } = useCatFact()

  const handleClick = async () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App index</h1>
      <button onClick={handleClick}>Get new fact</button>
      <section>
        {fact && <p>{fact}</p>}
        <Otro />
      </section>
    </main>
  )
}
