import Link from "next/link";

const Nav = () => {
    
    const links = [
        {
            name: 'Main Objectives',
            url: '/main-objectives',
        },
        {
            name: 'Situation',
            url: '/situation',
        },
        {
            name: 'Partners',
            url: '/partners',
        },
        {
            name: 'Be Circular',
            url: '/be-circular',
        },
        {
            name: 'Raw Materials',
            url: '/raw-materials',
        },
    ];

    return (
        <nav className="h-full pt-24 px-10 pb-12 box-border">
            <div className="flex flex-col gap-4">
                {links.map((link, index) => (
                    <Link key={index} href={link.url} className="text-4xl text-black hover:text-black">
                        {link.name}
                    </Link>
                ))}
            </div>
        </nav>
    );
}
 
export default Nav;