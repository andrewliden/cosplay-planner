const navPages = [
    {
        href: '/cosplays',
        label: 'Cosplays'
    },
    {
        href: '/events',
        label: 'events'
    }
]

export default function AppBar(){
    return (
        <header>
            <nav>
                {navPages.map(({href, label}) =>
                    <a href={href} key={href}>
                        {label}
                    </a>
                )}
            </nav>
        </header>
    )
}