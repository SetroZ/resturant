export default function isServerSide(componentName: string): boolean {
  try {
    window
    console.log(`${componentName} is ClientSide`)
    return false
  } catch {
    console.log(`${componentName} is ServerSide`)
    return true
  }
}
