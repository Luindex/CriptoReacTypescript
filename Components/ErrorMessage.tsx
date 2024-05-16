import {ReactNode} from "react"

type ErrorProps = {
  children: ReactNode
}

const ErrorMessage = ({children}: ErrorProps) => {
  return <p className="Alert">{children}</p>
}

export default ErrorMessage
