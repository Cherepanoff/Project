declare module '*.scss' {
  type IClassNames = Record<string, string>
  const classNames: IClassNames
  export = classNames
}
declare module '*.svg' {
  const content: React.VFC<React.SVGProps<SVGSVGElement>>
  export default content
}
declare module '*.png';
declare module '*.jpg';

// eslint-disable-next-line @typescript-eslint/naming-convention
declare const __IS_DEV__: boolean
