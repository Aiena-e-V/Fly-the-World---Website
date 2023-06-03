export const Hero = () => (
    <>
        <header className="absolute inset-y-1/3 inset-x-2 z-30 mx-auto max-w-7xl px-page">
            <div className="flex flex-row justify-between items-end">
                <div>
                    <h1 className="mb-2 ml-2 text-4xl tracking-widest uppercase font-large">
                        Fly the World - features
                    </h1>

                    <h1 className="mt-2 w-2/3 text-xl">
                        Fly the World has been in development since 2013, and is now maintained by a nonprofit organisation.
                    </h1>
                    <div className="flex py-5 max-w-md" />
                </div>
            </div>
        </header>
        <img draggable="false" className="object-cover relative z-0 w-screen h-screen opacity-10 select-none" src="/img/header.png" alt="" />
    </>
);
