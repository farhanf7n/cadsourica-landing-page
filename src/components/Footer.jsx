import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-brand-blue text-white px-6 py-12">
      <div className="container mx-auto xl:max-w-screen-2xl">
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between gap-8 relative">
          {/* Logo and Description */}
          <div className="max-w-xl">
            <img src="/FooterLogo.png" alt="Cadsourcia" className="h-12 mb-6" />
            <p className="text-white/90 text-sm leading-relaxed">
              Cadsourcia est un acteur majeur de l'externalisation de ressources
              spécialisées en modélisation BIM et en visualisations
              architecturales 3D. Nos services s'adressent aux acteurs de
              l'immobilier tels que les architectes, promoteurs, designers et
              bureaux d'études. Basés à Paris et à Casablanca, nous intervenons
              sur l'ensemble de la zone EMEA (Europe, Moyen-Orient et Afrique)
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-8 lg:gap-16">
            <nav className="flex gap-8">
              <Link to="/expertises" className="hover:text-white/80">
                Expertises
              </Link>
              <Link to="/clients" className="hover:text-white/80">
                Clients
              </Link>
              <Link to="/consultants" className="hover:text-white/80">
                Consultants
              </Link>
              <Link to="/publications" className="hover:text-white/80">
                Publications
              </Link>
              <Link to="/nous-rejoindre" className="hover:text-white/80">
                Nous rejoindre
              </Link>
            </nav>
          </div>
          <a
            href="https://linkedin.com/company/cadsourcia"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white rounded-full p-2 hover:bg-white/90 absolute bottom-0 right-0"
          >
            <svg
              width="19"
              height="18"
              viewBox="0 0 19 18"
              fill="none"
              className="w-5 h-5"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_84_1000)">
                <path
                  d="M18.6483 18.0002L18.6528 17.9994V11.3979C18.6528 8.16841 17.9575 5.68066 14.182 5.68066C12.367 5.68066 11.149 6.67666 10.6518 7.62091H10.5993V5.98216H7.01953V17.9994H10.747V12.0489C10.747 10.4822 11.044 8.96716 12.9843 8.96716C14.896 8.96716 14.9245 10.7552 14.9245 12.1494V18.0002H18.6483Z"
                  fill="black"
                />
                <path
                  d="M0.949951 5.98291H4.68195V18.0002H0.949951V5.98291Z"
                  fill="black"
                />
                <path
                  d="M2.81433 0C1.62108 0 0.652832 0.96825 0.652832 2.1615C0.652832 3.35475 1.62108 4.34325 2.81433 4.34325C4.00758 4.34325 4.97583 3.35475 4.97583 2.1615C4.97508 0.96825 4.00683 0 2.81433 0Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_84_1000">
                  <rect
                    width="18"
                    height="18"
                    fill="white"
                    transform="translate(0.652832)"
                  />
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center mt-12 pt-6 border-t border-white/20 text-sm text-white/80">
          <div className="flex flex-wrap gap-6 mb-4 sm:mb-0">
            <Link to="/data-privacy" className="hover:text-white">
              Data privacy
            </Link>
            <Link to="/terms" className="hover:text-white">
              Terms and conditions
            </Link>
          </div>
          <div className="flex items-center gap-4">
            <span>copyright@2024 codepulse. All rights reserved</span>
          </div>
          <div>
            <span>Terms and conditions</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
