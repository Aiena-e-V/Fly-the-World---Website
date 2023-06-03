import Container from '../utils/Container';
import { Button } from '../utils/Button';
/* eslint-disable */

export const Donate = () => (
    <section className="bg-blue-darker">
        <div className="relative">
            <img
                className="object-cover absolute w-full h-full opacity-10"
                src="/img/donate.jpg"
                alt=""
            />

            <Container className="flex flex-col items-center py-12 mx-auto max-w-7xl">
                <div className="max-w-4xl text-center lg:text-left">
                    <h1 className="text-teal">Donations</h1>
                    <div className="max-w-4xl text-center lg:text-left">
                        <p className="mb-4 text-blue-200">
                            Aiena e.V is a government-recognized nonprofit organization, and we rely on your contributions to keep our servers up and running!
                        </p>
                        <p className="mb-4 text-blue-200">
                            We use Donorbox for processing donations. If you encounter any issues or have questions, please email us at "vorstand@aiena-ev.de".
                        </p>
                    </div>
                </div>
                <div className="flex flex-wrap justify-center items-center mt-8 md:justify-start">
                    <div className="md:grow">
                        <a href="https://donorbox.org/aiena-fly-the-world">
                            <Button className="mt-8 mr-4 hover:text-teal-light-contrast bg-teal-light-contrast hover:bg-white rounded-md border-2 border-teal-light-contrast shadow-lg transition duration-300 ease-in-out hover:scale-105 w-50">
                                Donations
                            </Button>
                        </a>
                        <div className="flex justify-end items-start mt-4">
                            <em className="self-center max-w-prose text-teal-100">
                                *Aiena eV is a nonprofit organisation, which is why we are not allowed to make any profit from donations. Donating does not grant access to any features or advantages.
                            </em>
                            <em className="self-center max-w-prose text-teal-100">
                                *Donations may be tax-deductible for German users. For donations exceeding 200€, please contact us at "vorstand@aiena-ev.de" to receive a donation receipt.
                            </em>
                        </div>
                    </div>
                </div>
            </Container>
        </div>
    </section>
);
