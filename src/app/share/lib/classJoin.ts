interface ClassesStyle {
    mainClass: string,
    otherClasses?: Array<String>,
    booleanClasses?: Record<string, boolean>
}


export const classJoin = (args: ClassesStyle): string => {
   return [
    args.mainClass,
    ...args.otherClasses || [],
    ...Object.entries(args?.booleanClasses || []).filter(([key, value]) => value)
    .map(([key,value]) => value)
   ].join('')

}