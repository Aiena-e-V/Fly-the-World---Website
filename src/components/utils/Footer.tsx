import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import Image from 'next/image';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faDiscord, faGithub } from '@fortawesome/free-brands-svg-icons';
import Container from './Container';

type IconItemProp = {
    icon: IconProp,
    href?: string
}

export const FooterIconItem = (props: IconItemProp) => (
    <a href={props.href} target="_blank" rel="noreferrer">
        <FontAwesomeIcon className="hover:text-blue-light transition" icon={props.icon} size="lg" />
    </a>
);

export const Footer = () => (
    <footer className="py-8 bg-blue-dark">
        <Container className="flex flex-col space-y-2">

            <div className="flex gap-x-4 justify-center">
                <FooterIconItem icon={faGithub} href="https://github.com/Aiena-e-V" />
                <FooterIconItem icon={faDiscord} href="https://discord.gg/Y9qdHcWXvZ" />
            </div>

            <div className="flex gap-x-4 justify-center text-center">
                <a
                    className="hover:underline"
                    href="https://github.com/flybywiresim/flybywiresim-website/"
                    target="_blank"
                    rel="noreferrer"
                >
                    GitHub
                </a>
                <span className="hover:underline cursor-pointer">
                    <Link href="https://forum.aiena.de/wsc/index.php?nutzungsbedingungen-de/">
                        Terms of Service
                    </Link>
                </span>
                <span className="hover:underline cursor-pointer">
                    <Link href="https://forum.aiena.de/wsc/index.php?datenschutzerklaerung_2/">
                        Privacy Policy
                    </Link>
                </span>
                <span className="hover:underline cursor-pointer">
                    <Link href="https://forum.aiena.de/wsc/index.php?legal-notice/">
                        Legal Notice
                    </Link>
                </span>
            </div>

            <a
                className="flex justify-center"
                href="https://vercel.com/?utm_source=flybywiresim&utm_campaign=oss"
                target="_blank"
                rel="noreferrer"
            >
                Powered by
                <span className="mx-2">
                    <Image src="/svg/vercel.svg" alt="Vercel" width={60} height={20} />
                </span>
            </a>
            <em className="text-center text-teal-100">&copy; Aiena e.V</em>
            <a href="https://github.com/flybywiresim/website" target="_blank" rel="noopener noreferrer" className="text-center text-teal-100 hover:text-teal-200 underline">
                This website is a fork of the FlyByWireSim Marketing Website
            </a>
        </Container>
    </footer>
);
