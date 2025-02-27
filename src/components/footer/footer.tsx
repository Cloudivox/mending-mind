function Footer() {
  return (
    <footer className="bg-[#1C1C1C] text-white py-12 px-4 font-montserrat">
      <div className="max-w-6xl mx-auto">
        {/* Social Icons */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://linkedin.com"
            className="bg-yellow-400 rounded-full p-2 transition-all duration-500 group"
          >
            <svg
              className="w-6 h-6 transition-all duration-500 group-hover:text-black group-hover:rotate-[360deg] group-hover:transform"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
            </svg>
          </a>

          <a
            href="https://wa.me/"
            className="bg-yellow-400 rounded-full p-2 transition-all duration-500 group"
          >
            <svg
              className="w-6 h-6 transition-all duration-500 group-hover:text-black group-hover:rotate-[360deg] group-hover:transform"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>

          <a
            href="https://instagram.com"
            className="bg-yellow-400 rounded-full p-2 transition-all duration-500 group"
          >
            <svg
              className="w-6 h-6 transition-all duration-500 group-hover:text-black group-hover:rotate-[360deg] group-hover:transform"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="mb-8">
          <ul className="flex flex-wrap justify-center gap-x-4 gap-y-2 text-md md:text-base">
            <li>
              <a href="/" className="hover:text-yellow-400 tracking-wide">
                Home
              </a>
            </li>
            <li className="hidden md:block">|</li>
            <li>
              <a href="/about" className="hover:text-yellow-400 tracking-wide">
                About
              </a>
            </li>
            <li className="hidden md:block">|</li>
            <li>
              <a
                href="/therapy"
                className="hover:text-yellow-400 tracking-wide"
              >
                Therapy Sessions
              </a>
            </li>
            <li className="hidden md:block">|</li>
            <li>
              <a
                href="/community"
                className="hover:text-yellow-400 tracking-wide"
              >
                Community
              </a>
            </li>
            <li className="hidden md:block">|</li>
            <li>
              <a
                href="/corporate"
                className="hover:text-yellow-400 tracking-wide"
              >
                Corporate
              </a>
            </li>
            <li className="hidden md:block">|</li>
            <li>
              <a
                href="/internships"
                className="hover:text-yellow-400 tracking-wide"
              >
                Internships
              </a>
            </li>
            <li className="hidden md:block">|</li>
            <li>
              <a
                href="/resources"
                className="hover:text-yellow-400 tracking-wide"
              >
                Resources
              </a>
            </li>
            <li className="hidden md:block">|</li>
            <li>
              <a
                href="/contact"
                className="hover:text-yellow-400 tracking-wide"
              >
                Let's Talk
              </a>
            </li>
          </ul>
        </nav>

        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-12 text-sm">
          <div className="bg-white text-black rounded px-4 py-2 font-bold">
            <span className=" tracking-wide">email : mendingminds.com</span>
          </div>
          <div className="bg-white text-black rounded px-4 py-2 font-bold">
            <span className=" tracking-wide">Contact : 99999 99999</span>
          </div>
          <div className="bg-white text-black rounded px-4 py-2 font-bold">
            <span className=" tracking-wide">
              Address : Flat No. 001, Shinghar Vastu, Mulund West, Mumbai - 80
            </span>
          </div>
        </div>
        <hr />
        {/* Disclaimer */}
        <div className="text-center text-md mb-8 px-4 mt-8">
          <p className=" tracking-wide">
            Mending Mind does not provide crisis intervention or emergency
            support. If you or
          </p>
          <p className=" tracking-wide">
            someone you know requires immediate assistance, please don't
            hesitate to seek help
          </p>
          <p className=" tracking-wide">from crisis support organizations.</p>
        </div>

        {/* Emergency Contacts */}
        <div className="flex flex-col md:flex-row justify-center gap-4 text-sm text-center">
          <div className=" tracking-wide">
            National Mental Health
            <br />
            Helpline: 1800-599-0019
          </div>
          <div className="hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M136 24v208a8 8 0 0 1-16 0V24a8 8 0 0 1 16 0"
              />
            </svg>
          </div>
          <div className=" tracking-wide">
            Mann Talks:
            <br />
            +91-8686139139
          </div>
          <div className="hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M136 24v208a8 8 0 0 1-16 0V24a8 8 0 0 1 16 0"
              />
            </svg>
          </div>
          <div className=" tracking-wide">
            Vandrevala Foundation:
            <br />
            +91-9999666555
          </div>
          <div className="hidden md:block">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              viewBox="0 0 256 256"
            >
              <path
                fill="currentColor"
                d="M136 24v208a8 8 0 0 1-16 0V24a8 8 0 0 1 16 0"
              />
            </svg>
          </div>
          <div className=" tracking-wide">
            Sneha: +91-91675 35765 /<br />
            +91-98330 52684
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
