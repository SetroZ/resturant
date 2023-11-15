const getData = async <T>(url: string, options?: RequestInit) => {
  console.log(url)
  const res = await fetch(`${process.env.LOCATION}/api/${url}`, {
    ...options,
    //   next: { revalidate: 100 },
    cache: 'no-cache',
  })
  


  return (await res.json()) as T
}

export default getData
