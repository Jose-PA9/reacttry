import { useEffect, useState } from 'react'

// const CAT_PREFIX_IMAGE_URL = 'https://cataas.com/cat/says/'

export function useCatImage ({ fact }) {
  const [imageUrl, setImageURL] = useState()

  useEffect(() => {
    if (!fact) return

    const threeFirstWords = fact.split(' ', 3).join(' ')

    fetch(`https://cataas.com/cat/says/${threeFirstWords}?size=50&color=red&json=true`)
      .then(res => res.json())
      .then(response => {
        // const { url } = response
        // setImageURL(`${CAT_PREFIX_IMAGE_URL}${url}`)
        setImageURL('https://cataas.com/cat/says/hello')
      })
  }, [fact])

  return { imageUrl }
}
