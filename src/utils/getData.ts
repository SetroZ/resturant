const getData = async <T>(url: string, options?: RequestInit) => {
  console.log(`${process.env.LOCATION}/api/${url}`)
  const res = await fetch(`${process.env.LOCATION}/api/${url}`, {
    ...options,
    //   next: { revalidate: 100 },
    cache: 'no-cache',
  })

  if (!res.ok) throw new Error('failed')

  return (await res.json()) as T
}

export default getData
