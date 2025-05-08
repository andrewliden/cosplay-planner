export default function PageHeading({children}: {children?: React.ReactNode}) {
    return(
        <h1 className='text-3xl'>
            {children}
        </h1>
    );
}