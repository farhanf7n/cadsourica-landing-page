import React from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

function Engagement() {
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
    <section>
      <div className="relative pt-1 sm:py-[120px]">
        <div className="relative px-4 mx-auto sm:px-6 lg:px-0 max-w-[90%] lg:flex lg:items-center lg:gap-12">
          <div className="lg:w-1/2">
            <div className="mt-8 lg:mt-0">
              <img
                className="mx-auto object-contain absolute top-0 left-[-100px] w-[50%]"
                src="/src/assets/images/pattern.png"
                alt="Geometric wireframe pattern"
              />
            </div>
          </div>
          <div className="lg:w-1/2 pt-20 sm:pt-0 md:pt-20 mx-auto text-left">
            <h1 className="mt-2 text-6xl leading-[60px] font-bold text-black sm:mt-2 sm:text-5xl xl:text-6xl">
              Notre engagement envers l'excellence
            </h1>

            <div className="mt-6 font-lato text-xl leading-7 text-[#4B5563]">
              <p>
                Animés par notre engagement envers l'excellence et notre passion
                pour l'architecture et les détails techniques, nous accompagnons
                nos clients dans la transformation de leurs idées tout les
                aidant à s'adapter aux défis technologiques et économiques
                d'aujourd'hui.
              </p>

              <p className="pt-8">
                En s'adaptant aux dernières technologies et en investissant sur
                des outils et infrastructures IT de pointe nous pouvons répondre
                aux exigences des projets les plus complexes.
              </p>

              <p className="pt-8">
                Cadsourcia incarne l'excellence opérationnelle, portée par des
                fondateurs architectes de renom qui insufflent leur expertise et
                leur vision à chaque projet. Grâce à des processus optimisés et
                à des outils technologiques de pointe, nous garantissons des
                modèles et des rendus aux meilleurs standards. Cette alliance
                fait de Cadsourcia un partenaire de choix pour votre
                organisation.
              </p>
            </div>

            <div className="mt-[30px] sm:mt-12 flex items-start gap-2">
              <NavLink
                to="/suggestion"
                className="whitespace-nowrap text-[16px] leading-[20px] font-bold bg-white text-brand-blue hover:bg-brand-blue/90 hover:text-white border border-brand-blue py-[10px] px-[20px] rounded-full font-lato transition-all duration-300 ease-in-out z-[999]"
              >
                Discuter d'un projet
              </NavLink>
              <Link
                to="suggestion"
                className="whitespace-nowrap text-base leading-6 font-normal bg-white text-brand-blue hover:bg-brand-blue/90 hover:text-white border border-brand-blue rounded-full font-lato transition-all duration-300 ease-in-out z-[999]"
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
        </div>
      </div>
    </section>
  );
}

export default Engagement;
