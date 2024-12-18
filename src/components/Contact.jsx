import { NavLink, Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
function Contact() {
  const controls = useAnimation();

  const pathVariants = {
    normal: {
      x: 0,
      y: 0,
      rotate: 0,
    },
    animate: {
      x: [0, 3, 0],
      y: [0, -3, 0],
      transition: {
        duration: 0.5,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };
  return (
    <section className="p-10 mb-24">
      <div className="container xl:max-w-screen-2xl mx-auto relative rounded-2xl overflow-hidden">
        <div className="flex flex-col md:flex-row">
          <div className="relative w-full md:w-1/2 flex flex-col justify-center p-10 bg-brand-blue">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-semibold max-w-[600px] leading-tight">
              Dynamisez votre organisation dès maintenant
            </h2>

            <p className="text-white/90 mt-4 max-w-[600px] text-lg">
              Cadsourcia est le partenaire idéal pour ceux qui cherchent une
              ressource supplémentaire en modélisation architecturale.
              Contactez-nous rapidement afin d'accélerer votre développement !
            </p>

            <div className="mt-[30px] sm:mt-12 flex items-start gap-2">
              <NavLink
                to="/suggestion"
                className="whitespace-nowrap text-[16px] leading-[20px] font-bold bg-white text-brand-blue hover:bg-brand-blue/90 hover:text-white border border-brand-blue hover:border-white py-[10px] px-[20px] rounded-full font-lato transition-all duration-300 ease-in-out"
              >
                Prenez rendez-vous
              </NavLink>
              <Link
                to="suggestion"
                className="whitespace-nowrap text-base leading-6 font-normal bg-white text-brand-blue hover:bg-brand-blue/90 hover:border-white hover:text-white border border-brand-blue rounded-full font-lato transition-all duration-300 ease-in-out"
              >
                <div
                  className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center"
                  onMouseEnter={() => controls.start("animate")}
                  onMouseLeave={() => controls.start("normal")}
                >
                  <motion.svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    variants={pathVariants}
                    animate={controls}
                  >
                    <path
                      d="M6 18L18 6M18 6H9M18 6V15"
                      stroke="currentColor"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </motion.svg>
                </div>
              </Link>
            </div>
          </div>
          <img
            className="hidden md:block md:w-1/2"
            src="/PersonUsingComputer.png"
            alt="Person using computer"
          />
        </div>
      </div>
    </section>
  );
}

export default Contact;
