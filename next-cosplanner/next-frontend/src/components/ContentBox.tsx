import PageHeading from "./PageHeading";

export default function ContentBox({action, children, label}: {action?: React.ReactNode, children?: React.ReactNode, label: React.ReactNode}) {
    return(
        <div className='bg-gray-900 p-4 rounded-lg'>
            {action && 
                <div className='float-end'>
                    {action}
                </div>
            }
            <PageHeading>{label}</PageHeading>
            {children}
        </div>
    );
}