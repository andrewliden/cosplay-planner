import type { DetailedHTMLProps, InputHTMLAttributes } from "react"
import inputClasses from "./inputClasses"

type InputProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'className'>

export default function Input(props: InputProps) {
    return (
        <input
            className={inputClasses}
            {...props}
        />
    )
}