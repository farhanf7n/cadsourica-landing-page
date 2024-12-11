import React from "react";
import { NavLink, Link } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";

function Hero() {
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
      <div class="relative pt-12 bg-gray-50 sm:py-[280px]">
        <div class="absolute right-20 bottom-44 hidden lg:block">
          <img
            class="object-right "
            src="/src/assets/images/hero-building.png"
            alt=""
          />
        </div>

        <div class="relative px-4 mx-auto sm:px-6 lg:px-0 max-w-[90%]">
          <div class="max-w-lg pt-20 sm:pt-0 md:pt-20 mx-auto text-left lg:mx-0 lg:max-w-3xl lg:text-left">
            <div className="flex items-center gap-4">
              <svg
                width="46"
                height="44"
                viewBox="0 0 46 44"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.943 0.0169722C28.9513 0.703802 33.4959 3.31243 36.6148 7.29076C38.1341 9.17499 40.2984 10.5585 41.7073 12.5191C45.9511 18.4603 46.5622 25.0127 43.3454 31.5905C40.1287 38.1683 34.6033 41.6652 27.2192 42.132C25.2755 42.2508 23.3743 42.9807 21.4307 43.3457C16.643 44.0682 11.7623 42.8975 7.82325 40.0819C3.88425 37.2663 1.19679 33.0271 0.330739 28.2634C-0.529181 23.7321 0.301189 19.0428 2.6648 15.0823C3.09237 14.3317 3.45305 13.545 3.74271 12.7313C6.44173 5.42352 11.6531 1.20523 19.3258 0L23.943 0.0169722ZM21.0827 36.369C26.8203 36.2162 31.2677 34.3065 34.773 30.3513C35.4342 29.5848 35.8795 28.6562 36.0632 27.6608C37.7607 18.3754 31.1998 9.14104 21.906 7.43505C21.0901 7.26517 20.2481 7.26258 19.4312 7.42744C18.6142 7.59229 17.8392 7.92116 17.153 8.39414C14.1005 10.3302 11.704 13.1432 10.2773 16.4644C8.85068 19.7857 8.46043 23.4604 9.15774 27.0072C10.0914 31.93 12.6546 35.1383 17.7811 35.9106C19.0372 36.1483 20.2934 36.2671 21.0827 36.369ZM23.247 41.767C8.60606 39.6027 3.92944 29.7317 2.6648 17.2636C-0.534986 23.3661 0.619309 31.5056 5.55055 36.9207C10.0659 41.9028 17.9423 43.8634 23.247 41.767ZM37.3363 26.3282C40.1287 21.728 39.7807 14.6834 36.6488 11.0507C32.6087 6.3147 27.0409 4.50686 22.3388 6.45899C32.2183 9.36171 37.3533 15.8631 37.3363 26.3282ZM5.35535 11.3733C9.83676 8.27531 14.1145 5.66116 19.0118 4.31165C24.1043 2.90272 28.9591 4.71905 33.8309 6.00915C29.2562 1.67203 23.926 -0.110342 17.7047 1.28161C12.1199 2.5123 8.07984 5.84789 5.35535 11.3733ZM38.6094 10.7876C38.7707 11.212 38.9234 11.6364 39.0847 12.0607C40.2305 15.1078 41.7158 18.002 41.8092 21.397C42.0468 29.7657 38.0068 36.2501 30.368 39.7894C29.6551 40.1204 28.9931 40.5533 28.2971 40.9437C36.0886 39.8828 41.4782 35.7748 43.634 28.2125C45.5352 21.4819 43.668 15.617 38.6094 10.7876ZM9.45481 31.4462C5.89854 21.4479 8.35143 13.4697 16.9832 7.1974C10.4818 7.90186 7.79974 12.3578 6.18711 17.5437C4.57449 22.7295 4.78668 27.542 9.45481 31.4462ZM34.9173 31.6584C32.2036 34.3711 28.7385 36.2072 24.97 36.9291C21.2496 37.5928 17.4167 37.1623 13.9362 35.69C19.3852 42.2848 30.7585 42.5988 34.9173 31.6584ZM33.0331 37.1753C38.9319 33.636 42.293 25.2928 40.3493 18.7065C39.874 25.6747 36.0547 31.3274 33.0586 37.1753H33.0331ZM4.30289 22.3646C4.59037 20.2819 5.0272 18.2227 5.60997 16.2026C6.46329 14.185 7.46472 12.2332 8.60606 10.3632C3.96339 13.5036 2.98732 15.4642 4.30289 22.3646ZM8.8522 31.1322L8.0968 31.896C9.74128 34.525 12.0361 36.6854 14.7595 38.1683L8.8522 31.1322ZM23.5271 5.04157L23.4252 4.53233L16.5164 5.88184L16.6692 6.59479L23.5271 5.04157Z"
                  fill="#38BDF8"
                />
              </svg>
              <p className="text-3xl font-bold text-brand-blue">À propos</p>
            </div>
            <h1 class="mt-2 text-6xl leading-[60px] font-bold text-black sm:mt-2 sm:text-5xl xl:text-6xl">
              Outsourced Modeling Solutions for Architecture and Real Estate
            </h1>

            <div className="mt-6 font-lato text-xl leading-7 text-[#4B5563]">
              <p>
                Ayez accès aux meilleures ressources en modélisations
                architecturales (BIM et visualisation 3D) en sous-traitance et
                dynamisez votre organisation.
              </p>

              <p className="pt-8">
                Que vous soyez architecte, agence de design, ingénieurs, ou
                bureau d'études, nous pouvons répondre à vos besoins. Avec des
                bureaux à Paris et à Casablanca, notre présence s'étend à toute
                la région EMEA (Europe, Moyen-Orient et Afrique).
              </p>
            </div>

            <div class="mt-[30px] sm:mt-12 flex items-start gap-2">
              <NavLink
                to="/suggestion"
                className="whitespace-nowrap text-[16px] leading-[20px] font-bold bg-white text-brand-blue hover:bg-brand-blue/90 hover:text-white border border-brand-blue py-[10px] px-[20px] rounded-full font-lato transition-all duration-300 ease-in-out"
              >
                Discuter d'un projet
              </NavLink>
              <Link
                to="suggestion"
                className="whitespace-nowrap text-base leading-6 font-normal bg-white text-brand-blue hover:bg-brand-blue/90 hover:text-white border border-brand-blue rounded-full font-lato transition-all duration-300 ease-in-out"
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

          <div class="mt-8 lg:hidden">
            <img
              class="w-full mx-auto"
              src="/src/assets/images/hero-building.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
