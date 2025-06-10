export default function FormFeedback({errorData}: {errorData: string[]|null}) {
    if(errorData === null || errorData.length === 0) {
        return null;
    }
    return <span className='text-red-500'>{errorData}</span>;
}