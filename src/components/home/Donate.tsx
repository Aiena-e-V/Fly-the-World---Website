import Container from '../utils/Container';

export const Donate = () => (
  <section className="bg-blue-darker">
    <div className="relative">
      <img className="object-cover absolute w-full h-full opacity-10" src="/img/donate.jpg" alt="" />

      <Container className="flex flex-col items-center py-12 max-w-7xl mx-auto">
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
        <div className="flex flex-wrap items-center justify-center md:justify-start mt-8">
          <div className="md:flex-grow">
            <div className="flex items-center justify-center"> {/* Updated code */}
              <script src="https://donorbox.org/widget.js" paypalexpress="true"></script>
              <iframe
                src="https://donorbox.org/embed/aiena-fly-the-world"
                name="donorbox"
                allowpaymentrequest="allowpaymentrequest"
                seamless="seamless"
                frameBorder="0"
                scrolling="no"
                height="900px"
                width="100%"
                style={{ maxWidth: '500px', minWidth: '250px', maxHeight: 'none!important' }}
              ></iframe>
            </div>
            <div className="flex items-start justify-end mt-4"> {/* Updated code */}
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