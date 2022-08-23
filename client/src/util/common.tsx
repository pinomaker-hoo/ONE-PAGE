import { useState } from "react"

export function useNull(arr: unknown[]): boolean {
  console.log(arr)
  for (const a of arr) {
    if (!a) return false
  }
  return true
}

export function useCheck(a: unknown, b: unknown): boolean {
  if (a !== b) return false
  return true
}

export function useInput(init?: unknown) {
  const [value, setValue] = useState(init)
  const onChange = (event: any) => {
    setValue(() => event.target.value)
  }
  return { value, onChange, setValue }
}
