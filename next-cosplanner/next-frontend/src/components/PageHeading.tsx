export default function PageHeading({children}: {children?: React.ReactNode}) {
    return(
        <h1 className='text-xl'>
            {children}
        </h1>
    );
}