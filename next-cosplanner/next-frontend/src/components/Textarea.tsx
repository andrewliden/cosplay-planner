import type { DetailedHTMLProps, TextareaHTMLAttributes } from "react"
import inputClasses from "./inputClasses"

type TextareaProps = Omit<DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>, 'className'>

export default function Textarea(props: TextareaProps) {
    return (
        <textarea
            className={inputClasses}
            {...props}
        />
    )
}