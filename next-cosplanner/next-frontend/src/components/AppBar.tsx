const navPages = [
    {
        href: '/',
        label: 'Home'
    },
    {
        href: '/cosplays',
        label: 'Cosplays'
    },
    {
        href: '/events',
        label: 'Events'
    }
];

export default function AppBar(){
    return (
        <header className='w-screen bg-purple-950 text-white'>
            <nav className='mx-auto max-w-3xl flex gap-2'>
                {navPages.map(({href, label}) =>
                    <a href={href} key={href}>
                        {label}
                    </a>
                )}
            </nav>
        </header>
    )
}