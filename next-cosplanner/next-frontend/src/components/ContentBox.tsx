export default function ContentBox({children}: {children?: React.ReactNode}) {
    return(
        <div className='bg-'>
            {children}
        </div>
    );
}