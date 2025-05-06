export default function MainContainer({children}: {children?: React.ReactNode}){
    return (
        <main className='mx-auto my-2 max-w-3xl'>
            {children}
        </main>
    )
}