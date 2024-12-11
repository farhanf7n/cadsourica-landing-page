import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
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
    <section className="py-24 px-4 mx-auto sm:px-6 lg:px-0 max-w-[90%]">
      <div className="text-center mb-16">
        <span className="text-[#0976C2]">Articles</span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold mt-4 mb-6">
          Nos dernières publications
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto text-lg">
          "Plongez dans un univers d'articles approfondis, d'analyses d'experts
          et d'histoires inspirantes conçus pour vous informer, vous éduquer et
          éveiller votre curiosité."
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
        spaceBetween={24}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="relative"
      >
        {articles.map((article, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-lg overflow-hidden cursor-pointer group">
              <div className="aspect-w-16 aspect-h-9 relative">
                <img
                  src={article.image}
                  alt={article.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-[#0976C2] text-sm">
                  {article.category}
                </span>
                <h3 className="text-xl font-semibold mt-2 group-hover:text-[#0976C2] transition-colors">
                  {article.title}
                </h3>
                <p className="text-gray-600 mt-2 text-sm">
                  {article.description}
                </p>
                <div className="flex items-center mt-4 gap-3">
                  <img
                    src={article.author.avatar}
                    alt={article.author.name}
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-medium">{article.author.name}</p>
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

      {/* Custom Navigation Buttons */}
      <div className="flex justify-center gap-4 mt-8">
        <button className="swiper-button-prev w-12 h-12 rounded-full border border-[#0976C2] flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M15 19l-7-7 7-7"
              stroke="#0976C2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="swiper-button-next w-12 h-12 rounded-full border border-[#0976C2] flex items-center justify-center">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path
              d="M9 5l7 7-7 7"
              stroke="#0976C2"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </section>
  );
}

export default SliderSection;
