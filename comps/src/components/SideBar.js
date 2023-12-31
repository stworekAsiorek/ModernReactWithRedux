
import Link from "./Link";

function SideBar(){
    const links = [
        {
            label: 'Dropdown',
            path: '/'
        },
        {
            label: 'Accordion',
            path: '/accordion'
        },
        {
            label: 'Buttons',
            path: '/buttons'
        },
        {
            label: 'Modal',
            path: '/modal'
        },
        {
            label: 'Table',
            path: '/table'
        },
        {
            label: 'Counter',
            path: '/counter'
        }
    ]

    const renderedLinks = links.map((link) => {
        return <Link className="mb-3" activeClassName="border-l-4 font-bold pl-2 border-blue-500" to={link.path} key={link.label}>{link.label}</Link>
    });

    return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col items-start ml-2">
        {renderedLinks}
    </div>)
}

export default SideBar;