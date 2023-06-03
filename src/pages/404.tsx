const Custom404 = () => (
    <section>
        <div className="flex flex-col justify-center mx-auto max-w-md min-h-screen text-center md:max-w-4xl">
            <h5 className="text-9xl font-bold text-blue-light">404</h5>
            <h2 className="mt-8 text-4xl font-bold">
                The page you are looking for does not exist.
            </h2>
            <h1 className="mt-4 text-xl font-medium text-grey-light">
                Please check the URL or
                {' '}
                <a href="https://ftw-sim.de" className="text-blue underline">return to the homepage</a>
                .
            </h1>

        </div>

        <img
            className="object-cover fixed -z-10 w-screen h-screen opacity-10"
            src="header.png"
        />
    </section>
);

export default Custom404;
// please fix me, i am not working :c
