import type { DetailedHTMLProps, InputHTMLAttributes } from "react"

type InputProps = Omit<DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, 'className'>

export default function Input(props: InputProps) {
    return (
        <input
            className=''
            {...props}
        />
    )
}