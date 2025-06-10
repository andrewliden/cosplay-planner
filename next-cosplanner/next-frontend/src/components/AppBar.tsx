import HomeIcon from '@mui/icons-material/Home';
import FaceIcon from '@mui/icons-material/Face';
import EventIcon from '@mui/icons-material/Event';

const navPages = [
    {
        href: '/',
        label: <><HomeIcon /> Home</>
    },
    {
        href: '/cosplays',
        label: <><FaceIcon /> Cosplays</>
    },
    {
        href: '/events',
        label: <><EventIcon/> Events</>
    }
];

export default function AppBar(){
    return (
        <header className='w-screen bg-primary-700 text-white'>
            <nav className='mx-auto max-w-3xl flex gap-3'>
                {navPages.map(({href, label}) =>
                    <a
                        className='p-1 hover:bg-primary-600'
                        href={href}
                        key={href}
                    >
                        {label}
                    </a>
                )}
            </nav>
        </header>
    )
}