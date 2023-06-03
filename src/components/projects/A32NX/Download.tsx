import { Button } from '../../utils/Button';

export const Download = () => {
    const urls = {
        stable: 'https://forum.aiena.de/wsc/index.php?disclaimer/',
        dev: 'https://forum.aiena.de/wsc/index.php?form-user-response/1-fly-the-world-simulations-player-account/',
    };

    const getDownloadLink = (link: string) => `${link}`;

    return (
        <section id="download" className="relative bg-blue-dark-contrast">
            <div className="py-14 px-10 m-auto w-full lg:w-11/12 2xl:w-4/6">
                <div className="flex flex-col lg:flex-row">
                    <div className="w-full lg:pr-12 lg:w-3/5">
                        <div className="w-1/2 text-left divide-y divide-gray-500 2xl:w-1/4">
                            <h2 className="text-base font-medium tracking-widest text-blue-200 uppercase">READY TO FLY?</h2>
                            <p className="pt-3 mt-3 text-5xl font-medium text-blue-light">
                                Register
                            </p>
                        </div>

                        <p className="mt-5 max-w-prose text-xl">
                            Fly the World is currently in open beta, and accounts have to be setup manually to ensure stabillity at all times and not overload our systems.
                        </p>

                        <ul className="pt-7 pl-5 -m-2 text-lg list-disc text-gray-200">
                            <li className="pl-2 ml-2">Register on our forums</li>
                            <li className="pl-2 ml-2">Request your sim account</li>
                            <li className="pl-2 ml-2">Wait for your account to be setup</li>
                        </ul>
                    </div>
                    <div className="flex flex-col w-full divide-y divide-gray-500 lg:w-2/5">
                        {/* Installer */}
                        <div className="pt-16 pb-8 lg:pt-0">
                            <span className="text-4xl text-blue-100">YAACARS tracking</span>

                            <p className="mt-4 mb-6 max-w-prose">
                                Connect your simulators to our platform seamlessly using our ACARS client!
                            </p>

                            <a href="http://www.ftw-sim.de/yaacars/download/download.php?file=YAACARS%20V2.3%20%28Build%20FTW%23195%29.zip">
                                <Button className="font-bold bg-green-500 hover:bg-green-700 float-center w-50">Yaacars - Windows</Button>
                            </a>
                        </div>

                        {/* Direct Download */}
                        <div className="pt-7">
                            <span className="text-2xl text-blue-100">Sign-up process</span>
                            <p className="mt-4 mb-6 max-w-prose">
                                Sign up today by following these steps!
                            </p>

                            <div className="divide-y divide-gray-700">
                                <div className="flex flex-row justify-between items-center mb-5">
                                    <span className="text-xl text-gray-300">Register your account</span>
                                    <a href={getDownloadLink(urls.stable)}>
                                        <Button className="float-right w-40 font-bold bg-green-500 hover:bg-green-700">Register</Button>
                                    </a>
                                </div>
                                <div className="flex flex-row justify-between items-center pt-5 mb-5">
                                    <span className="text-xl text-gray-300">Request a sim account</span>
                                    <a href={getDownloadLink(urls.dev)}>
                                        <Button className="float-right w-40 font-bold bg-blue-light-contrast hover:bg-blue-medium">Request</Button>
                                    </a>
                                </div>
                                <div />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
