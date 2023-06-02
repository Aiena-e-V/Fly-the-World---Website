import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export const ExtendedFeatures = () => (
    <section className="py-4 pb-20 mx-auto max-w-screen-2xl rounded-lg sm:px-6 lg:px-8 px-page">
        <div className="grid
                        grid-cols-1
                        md:grid-cols-2
                        xl:grid-cols-3
                        2xl:grid-cols-4
                        max-w-max mx-auto gap-x-16 gap-y-20"
        >
            <Feature key="Aircraft ownership">
                <FeatureTitle>
                    Aircraft ownership
                </FeatureTitle>
                <FeatureBody>
                    Begin your journey with small propeller aircraft and gradually progress to owning a majestic 747 and beyond. With a wide selection of planes available for purchase, you'll have the opportunity to fly almost any aircraft your heart desires.
                </FeatureBody>
            </Feature>

            <Feature key="Freelancer">
                <FeatureTitle>
                    Freelancer
                </FeatureTitle>
                <FeatureBody>
                    Explore the world with routes tailored to your aircraft and location, flying solo with your own aircraft.
                </FeatureBody>
            </Feature>

            <Feature key="Repairs">
                <FeatureTitle>
                    Repair and Maintenance
                </FeatureTitle>
                <FeatureBody>
                    Repair and maintenance for your aircraft can be done at player-owned hangars or any airport of your choice, offering potential cost savings.
                </FeatureBody>
            </Feature>

            <Feature key="Airlines">
                <FeatureTitle>
                    Airlines
                </FeatureTitle>
                <FeatureBody>
                Choose from a wide selection of player-operated airlines that cater to your preferences, including location, language, and route types. With over 300 airlines to choose from, there's one that's perfect for you!
                </FeatureBody>
            </Feature>

            <Feature key="Start your Own">
                <FeatureTitle>
                    Start your own business
                </FeatureTitle>
                <FeatureBody>
                    Ready to offer unique jobs on our marketplace? Get an aircraft and start offering your services to everyone on FTW Sim!
                </FeatureBody>
            </Feature>

            <Feature key="Aircraft Leasing & Rental">
                <FeatureTitle>
                    Aircraft Leasing & Rental
                </FeatureTitle>
                <FeatureBody>
                      Explore various options for leasing or renting an aircraft if you don't have sufficient funds to purchase one at the moment.
                </FeatureBody>
            </Feature>

            <Feature key="Helicopter rescue and missions">
                <FeatureTitle>
                    Helicopter rescue and missions
                </FeatureTitle>
                <FeatureBody>
                    Embark on heroic rescue missions with helicopters, engaging in dynamic scenarios and immersive storytelling to make a difference in the world.
                </FeatureBody>
            </Feature>

        </div>
        <div id="download" />
    </section>
);

const Feature: FC = ({ children }) => (
    <div className="flex flex-row max-w-prose md:w-96">
        <FontAwesomeIcon className="mt-1 mr-5 mb-auto text-2xl text-green-500" size="1x" icon={faCheck} />
        <div className="space-y-3">
            {children}
        </div>
    </div>
);

const FeatureTitle: FC = ({ children }) => (
    <h1 className="text-2xl font-semibold">{children}</h1>
);

const FeatureBody: FC<{ className?: string }> = ({ children, className }) => (
    <p className={`text-lg text-left ${className}`}>
        {children}
    </p>
);
