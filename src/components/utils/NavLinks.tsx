import Link from 'next/link';
import { useRouter } from 'next/router';
import { Dropdown, DropdownItem } from './Dropdown';

export type LinkProps = {
    name: string,
    path: string,
    external?: boolean,
    className?: string
};

export const NavLink = ({ name, path, external, className }: LinkProps) => (
    <li className={`list-none transition w-full cursor-pointer hover:text-teal ${className}`}>
        {
            external ? (
                <a href={path}>
                    <p>
                        {name}
                    </p>
                </a>
            ) : (
                <Link href={path}>
                    <p>
                        {name}
                    </p>
                </Link>
            )
        }
    </li>
);

export const NavLinks = (props: { className?: string }) => {
    const router = useRouter();

    return (
        <span className={`flex flex-col gap-x-4 gap-y-2 md:items-center ${props.className}`}>
            {router.pathname !== '/' && <NavLink name="Home" path="/" />}
            <NavLink name="Features" path="/ftwsim" />
            <NavLink name="Documentation" external path="https://manual.ftw-sim.de" />
            <Dropdown titleName="Community">
                <DropdownItem>
                    <NavLink name="Discord" external path="https://discord.gg/Y9qdHcWXvZ" />
                </DropdownItem>
                <DropdownItem>
                    <NavLink name="Donate" external path="https://donorbox.org/aiena-fly-the-world" />
                </DropdownItem>
            </Dropdown>
        </span>
    );
};
