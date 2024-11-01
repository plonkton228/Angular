interface ClassesStyle {
    mainClass: string,
    otherClasses?: Array<String>,
    booleanClasses?: Record<string, boolean>
}
export type JoinClassFunc = (args: ClassesStyle) => string;

export const classJoin: JoinClassFunc = (args: ClassesStyle): string => {
    
   return [
    args.mainClass,
    ...args.otherClasses || [],
    ...Object.entries(args?.booleanClasses || []).filter(([key, value]) => value)
    .map(([key,value]) => value)
   ].join('')

}