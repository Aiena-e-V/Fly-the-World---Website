import { createRef, forwardRef } from 'react';
import { IconPackage } from '@tabler/icons';
import { Button } from '../utils/Button';
import Container from '../utils/Container';
/* eslint-disable */


export const installerRef = createRef<HTMLDivElement>();

export const Installer = forwardRef(() => (
    <section ref={installerRef} className="overflow-hidden py-12 bg-blue-dark">
        <Container className="flex flex-col items-center 3xl:flex-row 3xl:justify-center">
            <div className="mb-4 text-center 2xl:mr-12 3xl:text-left">
                <IconPackage className="p-2 mx-auto mb-4 bg-blue-light-contrast rounded-xl 3xl:mx-0" size={55} stroke={1.5} />
                <div className="text-center">
                    <h1 className="font-extrabold">
                        Yaacars tracking software
                    </h1>
                    <div className="h-4" />
                    {' '}
                    {/* Spacer */}
                    <p className="mx-auto max-w-2xl text-blue-200">
                        This is the main client for Windows/Linux/Mac to connect FTW to X-Plane, FSX, P3D and MS-FS2020
                    </p>
                </div>
                <div className="flex justify-center">
                    <div className="flex items-center">
                        <a href="https://www.ftw-sim.de/yaacars/download/download.php?file=YAACARS%20V2.3%20%28Build%20FTW%23195%29.zip">
                            <Button className="mt-8 mr-7 hover:text-teal-light-contrast bg-teal-light-contrast hover:bg-white rounded-md border-2 border-teal-light-contrast shadow-lg transition duration-300 ease-in-out hover:scale-105 w-50">
                                Download (Windows)
                            </Button>
                        </a>
                        <div className="my-4" />
                        {' '}
                        {/* Spacer */}
                        <a href="http://www.ftw-sim.de/yaacars/download/download.php?file=YAACARS%20V2.3%20%28Build%20FTW%23195%29.AppImage">
                            <Button className="mt-8 mr-4 hover:text-teal-light-contrast bg-teal-light-contrast hover:bg-white rounded-md border-2 border-teal-light-contrast shadow-lg transition duration-300 ease-in-out hover:scale-105 w-65">
                                Download (Linux)
                            </Button>
                        </a>
                        <a href="http://www.ftw-sim.de/yaacars/download/download.php?file=YAACARS%20V2.3%20%28Build%20FTW%23195%29.dmg">
                            <Button className="mt-8 mr-4 hover:text-teal-light-contrast bg-teal-light-contrast hover:bg-white rounded-md border-2 border-teal-light-contrast shadow-lg transition duration-300 ease-in-out hover:scale-105 w-50">
                                Download (MacOS -Sierra and up)
                            </Button>
                        </a>
                    </div>
                </div>

            </div>
        </Container>
    </section>
));
