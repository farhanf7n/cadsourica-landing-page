import { useAnimation } from "framer-motion";
function Expertise() {
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
    <section className="bg-brand-blue py-32 relative expertise-pattern">
      <div className="relative px-4 mx-auto sm:px-6 lg:px-0 max-w-[90%]">
        <div>
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
            <p className="text-3xl font-bold text-white">Notre expertise</p>
          </div>
          <p className="text-4xl leading-10 font-onest pt-3 text-white">
            Nous assistons nos clients dans la gestion de leurs projets grâce à
            notre expertise dans les domaines de la conception et de la
            modélisation 3D architecturales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-16">
          <div className="flex flex-col">
            <h2 className="text-5xl leading-[49px] font-bold text-white mb-4">
              Visualisation architecturale 3D
            </h2>
            <p className="text-white text-xl leading-7 mb-8">
              Modélisation 3D de tout type de projet à des fins commerciales.
              Grâce aux compétences de nos ressources et notre puissance de
              calcul, nous pouvons proposer les rendus suivants:{" "}
              <b>
                plans, images, vidéos, visites virtuelles et maquettes orbitales
                avec découpage, développement d'interfaces interactives.
              </b>
            </p>
            <p className="text-white text-xl leading-7">
              En tant que partenaire agence de marketing immobilier ou agence
              d'architecture faites appel à nos services pour vous aider à
              produire des rendus qui séduisent vos clients !
            </p>
          </div>

          <div className="relative">
            <img
              src="/multiple-buildings.png"
              alt="Visualisation architecturale 3D"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          <div className="relative order-4 md:order-3">
            <img
              src="/building-blueprint.png"
              alt="Modélisation BIM architecture"
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          <div className="flex flex-col order-3 md:order-4 relative">
            <h2 className="text-5xl leading-[49px] font-bold text-white mb-4">
              Modélisation BIM architecture
            </h2>
            <p className="text-white text-xl leading-7 mb-8">
              Conception de maquette architecturale BIM pour tout type de projet
              résidentiel, commercial ou technique. Notre modélisation est
              réalisée selon les standards de documentation structurée et
              adaptée au LOD/normes requis. L'ensemble de nos modeleurs sont
              encadrés par des architectes expérimentés.
            </p>
            <p className="text-white text-xl leading-7">
              Grâce à Revit architecture vous pouvez suivre l'évolution de votre
              projet de sa phase conceptuelle à son exécution. L'ensemble des
              nomenclatures et l'analyse de chaque élément. Nos ressources
              spécialisés conçoivent des maquettes fidèles à vos conventions.
            </p>
          </div>
        </div>

        <div className="flex flex-col flex-wrap justify-center items-center mt-16">
          <img src="/apps-icon.png" alt="" />
          <p className="text-center text-white text-xl leading-7 mt-5">
            *Cette liste de compétences n'est pas exhaustive, nous recherchons
            des profils qui correspondent à vos besoins.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Expertise;
