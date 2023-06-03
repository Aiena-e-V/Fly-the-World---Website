import Link from 'next/link';
import { Button } from '../utils/Button';
import { installerRef } from './Installer';
import Container from '../utils/Container';

export const A320Header = () => {
    const handleClick = () => {
        if (installerRef.current) {
            installerRef.current.scrollIntoView({ block: 'center' });
        }
    };

    return (
        <header>
            <img
                className="object-cover fixed -z-10 w-screen h-screen opacity-10"
                src="img/header.png"
            />

            <Container className="relative max-w-5xl min-h-screen ">
                <div className="absolute bottom-0 left-0 h-2/3 px-page ">
                    <h1 className="text-8xl font-bold">
                        <span className="text">Fly the World</span>
                    </h1>
                    <p className="max-w-xl">
                        A free web system designed to enhance every flight simulator
                    </p>
                    <div className="flex gap-4 my-5 max-w-md">
                        <Button
                            onClick={handleClick}
                            className="w-40 hover:text-blue bg-blue-light hover:bg-white border-2 border-blue-light"
                        >
                            Get Started
                        </Button>

                        <Link href="https://dragon.ftwsim.de/FlyTheWorld">
                            <Button
                                className="w-44 text-blue hover:text-blue-light hover:bg-white border-2 border-blue-light"
                            >
                                Simulation
                            </Button>
                        </Link>
                    </div>
                </div>
            </Container>
        </header>
    );
};
