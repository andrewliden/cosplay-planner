import PageHeading from "./PageHeading";
export default function ContentBox({children, label}: {children?: React.ReactNode, label: React.ReactNode}) {
    return(
        <div className='bg-gray-900 p-2 rounded-lg'>
            <PageHeading>{label}</PageHeading>
            <hr />
            {children}
        </div>
    );
}