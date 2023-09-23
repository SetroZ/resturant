const getData = async <T>(url: string) => {
  console.log(`http://localhost:3000/api/${url}`)
  const res = await fetch(`http://localhost:3000/api/${url}`, {
    //   next: { revalidate: 100 },
    cache: 'no-cache',
  })

  if (!res.ok) throw new Error('failed')

  return (await res.json()) as T
}

export default getData
