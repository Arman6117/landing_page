import clsx from "clsx"
import React from "react"

interface TitleProps {
    children:React.ReactNode
    className?:string
}

const Title = ({children,className}:TitleProps) => {
  return (
    <h1 className={clsx("font-semibold text-4xl", className)}>{children}</h1>
  )
}

export default Title