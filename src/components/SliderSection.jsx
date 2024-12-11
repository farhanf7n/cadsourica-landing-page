import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";

function SliderSection() {
  const articles = [
    {
      category: "3D modelling",
      title: "Une équipe sur-mesure",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      image: "/evergreenboat.png",
      author: {
        name: "Olivia Rhye",
        date: "20 Jan 2024",
        avatar: "/GirlAvatar.png",
      },
    },
    {
      category: "Design",
      title: "More women in Tech",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      image: "/AITalking.png",
      author: {
        name: "Olivia Rhye",
        date: "20 Jan 2024",
        avatar: "/GirlAvatar.png",
      },
    },
    {
      category: "Design",
      title: "Sourcing de consultants",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      image: "/PersonWalking.png",
      author: {
        name: "Olivia Rhye",
        date: "20 Jan 2024",
        avatar: "/GirlAvatar.png",
      },
    },
    {
      category: "Design",
      title: "Sourcing de consultants",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      image: "/PersonWalking.png",
      author: {
        name: "Olivia Rhye",
        date: "20 Jan 2024",
        avatar: "/GirlAvatar.png",
      },
    },
    {
      category: "Design",
      title: "Sourcing de consultants",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      image: "/PersonWalking.png",
      author: {
        name: "Olivia Rhye",
        date: "20 Jan 2024",
        avatar: "/GirlAvatar.png",
      },
    },
    {
      category: "Design",
      title: "Sourcing de consultants",
      description:
        "How do you create compelling presentations that wow your colleagues and impress your managers?",
      image: "/PersonWalking.png",
      author: {
        name: "Olivia Rhye",
        date: "20 Jan 2024",
        avatar: "/GirlAvatar.png",
      },
    },
  ];

  return (
    <section className="bg-[#E8F6FF] mb-24">
      <div className="py-24 px-4 mx-auto sm:px-6 lg:px-0 max-w-[90%]">
        <div className="text-center mb-16">
          <span className="text-[#0976C2] py-1 px-3 border-l border-r border-[#0976C2]">
            Articles
          </span>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mt-4 mb-6">
            Nos dernières publications
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-lg">
            "Plongez dans un univers d'articles approfondis, d'analyses
            d'experts et d'histoires inspirantes conçus pour vous informer, vous
            éduquer et éveiller votre curiosité."
          </p>
        </div>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            hideOnClick: true,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="relative"
        >
          {articles.map((article, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white rounded-2xl overflow-hidden cursor-pointer group px-[12px] pt-[12px] pb-[32px]">
                <div className="aspect-w-16 aspect-h-9 relative">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="pt-4 px-0 pb-0">
                  <span className="text-[#0976C2] text-sm">
                    {article.category}
                  </span>
                  <h3 className="text-xl font-semibold mt-2 flex justify-between items-center group-hover:text-[#0976C2] transition-colors">
                    {article.title}{" "}
                    <Link
                      to="suggestion"
                      className="whitespace-nowrap text-base leading-6 font-normal text-black font-lato"
                    >
                      <div className="cursor-pointer select-none p-2 hover:bg-accent rounded-md transition-colors duration-200 flex items-center justify-center">
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M6 18L18 6M18 6H9M18 6V15"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                    </Link>
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm">
                    {article.description}
                  </p>
                  <div className="flex items-center mt-4 gap-3">
                    <img
                      src={article.author.avatar}
                      alt={article.author.name}
                      className="w-8 h-8 rounded-xl"
                    />
                    <div>
                      <p className="text-sm font-medium">
                        {article.author.name}
                      </p>
                      <p className="text-sm text-gray-500">
                        {article.author.date}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="relative flex justify-center items-center gap-4">
          <div className="custom-swiper-button-prev swiper-button-prev px-6 py-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
              style={{ transform: "rotate(180deg)" }}
            >
              <path
                d="M20.0001 11.9998L4.00012 11.9998"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <div
            className="custom-swiper-button-next swiper-button-next px-6 py-2"
            style={{
              border: "1px solid #0976C2",
              borderRadius: "100%",
              width: "75px",
              height: "75px",
              padding: "unset",
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="16"
              height="16"
              fill="none"
            >
              <path
                d="M20.0001 11.9998L4.00012 11.9998"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M15.0003 17C15.0003 17 20.0002 13.3176 20.0002 12C20.0002 10.6824 15.0002 7 15.0002 7"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SliderSection;
