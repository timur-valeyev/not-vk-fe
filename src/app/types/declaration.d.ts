// declare module '*.scss' {
//   const content: Record<string, string>
//   export default content
// }

declare module '*.module.scss'
declare module '*.svg' {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const content: any
  export default content
}

declare module '*.png'
declare module '*.jpeg'
declare module '*.jpg'

declare const __IS_DEV__: boolean
