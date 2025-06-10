import type { ReactNode } from "react";
import type { ActionStateStatus } from "@/type-definitions/FormActionState"
import PublishIcon from '@mui/icons-material/Publish';
import HourglassEmptyIcon from '@mui/icons-material/HourglassEmpty';
import CheckIcon from '@mui/icons-material/Check';
import ErrorIcon from '@mui/icons-material/Error';

interface SubmitButtonStatusProps {
    isPending: boolean,
    status: ActionStateStatus
}

function SubmitButtonIcon({status, isPending}: SubmitButtonStatusProps) {
    if(isPending) {
        return <HourglassEmptyIcon />;
    }

    switch(status) {
        case 0:
            return <PublishIcon />;
        case 1:
            return <CheckIcon />;
        case 2:
            return <ErrorIcon />;
        default:
            throw new Error(`Submit button received invalid status: ${status}`);
    }
}

interface SubmitButtonProps extends SubmitButtonStatusProps {
    children?: ReactNode
}

function getColorClass({status, isPending}: SubmitButtonStatusProps) {
    if(isPending) {
        return 'bg-gray-700';
    }

    switch(status) {
        case 0:
            return 'bg-primary-500';
        case 1:
            return 'bg-green-500';
        case 2:
            return 'bg-red-500';
        default:
            throw new Error(`Submit button received invalid status: ${status}`);
    }
}

export default function SubmitButton({children, ...statusProps}: SubmitButtonProps) {
    
    return (
        <button
            className={`rounded-lg p-2 ${getColorClass(statusProps)} hover:bg-primary-400 text-white disabled:bg-gray-700`}
            type='submit'
            disabled={statusProps.isPending}
        >
            {children}
            <SubmitButtonIcon
                {...statusProps}
            />
        </button>
    );
}