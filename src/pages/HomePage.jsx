import { Navigation, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import menCatagory from "../featured/image/men-catagory.png";
import womenCatagory from "../featured/image/man-cat.png";
import anime from "../featured/image/anime.png";
import cartoon from "../featured/image/cartoon.png";
import funkey from "../featured/image/funkey.png";
import funny from "../featured/image/funny.png";
import geek from "../featured/image/geek.png";
import glow from "../featured/image/glow.png";
import slogan from "../featured/image/slogan.png";
import superHero from "../featured/image/super-hero.png";
import heroBg from "../featured/image/bg-img.png";
import MenCategory from "../featured/image/cat-men.jpg";
import WomenCategory from "../featured/image/cat-women.jpg";
import CatSticker from "../featured/image/cat-sticker.jpg";
import CatCover from "../featured/image/cat-cover.jpg";
import "./CSS/chooseUs.css";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import "./CSS/chooseUs.css";
// Import Swiper styles
import "swiper/css";
import ProductList from "../featured/product-list/ProductList";

const HomePage = () => {
  return (
    <>
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        // Autoplay
        // loop={true}
        // autoplay={{ delay: 3000 }}
        centeredSlides={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1,
          },
          1024: {
            slidesPerView: 1,
          },
        }}
      >
        <SwiperSlide>
          <div className="landing-hero-banner relative h-full min-h-[30rem] flex items-center xl:ps-[5.38rem] sm:ps-[3rem] ps-[1.5rem] xl:py-[5rem]  md:py-[3rem] py-[2rem] bg-[#ededed]">
            <div className="flex flex-col gap-[3rem] z-20 sm:z-0 ">
              <div className="flex flex-col md:gap-5 items-start">
                <h2 className="xl:text-[5rem] md:text-[3rem] text-[2rem] text-[#000000] xl:max-w-[34rem] sm:max-w-[20rem] max-w-[15rem] ">
                  YOUR TITLE IS HERE
                </h2>
                <p className="sm:text-[1.25rem] text-[0.875rem] text-[#636363] xl:max-w-[33rem] sm:max-w-[17rem] max-w-[14rem] ">
                  Subtitle, you can describe your product here
                </p>
              </div>
              <div className="flex w-full justify-between ">
                <Link to="#" className="button_primary">
                  <div className="button-inner">
                    <span>
                      <p className="text-[1.25rem] me-5 ">Shop Now</p>
                      <svg
                        width="17.500000"
                        height="17.500000"
                        viewBox="0 0 17.5 17.5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs />
                        <path
                          id="Vector"
                          d="M3.5 0L3.5 1.75L14.5162 1.75L0 16.2664L1.23376 17.5L15.75 2.98364L15.75 14L17.5 14L17.5 0L3.5 0Z"
                          fill="#C6866B"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                      </svg>
                    </span>
                    <span>
                      <p className="text-[1.25rem] me-5 ">Shop Now</p>
                      <svg
                        width="17.500000"
                        height="17.500000"
                        viewBox="0 0 17.5 17.5"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <defs />
                        <path
                          id="Vector"
                          d="M3.5 0L3.5 1.75L14.5162 1.75L0 16.2664L1.23376 17.5L15.75 2.98364L15.75 14L17.5 14L17.5 0L3.5 0Z"
                          fill="#C6866B"
                          fillOpacity="1.000000"
                          fillRule="nonzero"
                        />
                      </svg>
                    </span>
                  </div>
                </Link>
              </div>
            </div>
            <img
              src={heroBg}
              className=" z-0 sm:z-10 opacity-50 sm:opacity-100 absolute w-full xl:max-w-[28rem] sm:max-w-[24rem] max-w-[20rem] xl:h-[30rem] sm:h-[26rem] h-full bottom-0 xl:right-[10rem] right-0 bg-no-repeat bg-cover "
            ></img>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="landing-hero-banner relative h-full min-h-[30rem] flex items-center xl:ps-[5.38rem] sm:ps-[3rem] ps-[1.5rem] xl:py-[5rem]  md:py-[3rem] py-[2rem] bg-[#ededed]">
            <div className="flex flex-col gap-[3rem] z-20 sm:z-0 ">
              <div className="flex flex-col md:gap-5 items-start">
                <h2 className="xl:text-[5rem] md:text-[3rem] text-[2rem] text-[#000000] xl:max-w-[34rem] sm:max-w-[20rem] max-w-[15rem] ">
                  YOUR TITLE IS HERE
                </h2>
                <p className="sm:text-[1.25rem] text-[0.875rem] text-[#636363] xl:max-w-[33rem] sm:max-w-[17rem] max-w-[14rem] ">
                  Subtitle, you can describe your product here
                </p>
              </div>
              <div className="flex w-full justify-between ">
                <Link
                  to="#"
                  className="flex items-center sm:px-[2rem] px-[1rem] sm:py-[1rem] py-[0.5rem] text-[#C6866B] max-w-[13.5rem] rounded-full border border-solid  border-[#c6866b]"
                >
                  <p className="text-[1.25rem] me-5 ">Shop Now</p>
                  <svg
                    width="17.500000"
                    height="17.500000"
                    viewBox="0 0 17.5 17.5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <desc>Created with Pixso.</desc>
                    <defs />
                    <path
                      id="Vector"
                      d="M3.5 0L3.5 1.75L14.5162 1.75L0 16.2664L1.23376 17.5L15.75 2.98364L15.75 14L17.5 14L17.5 0L3.5 0Z"
                      fill="#C6866B"
                      fillOpacity="1.000000"
                      fillRule="nonzero"
                    />
                  </svg>
                </Link>
              </div>
            </div>
            <img
              src={heroBg}
              className=" z-0 sm:z-10 opacity-50 sm:opacity-100 absolute w-full xl:max-w-[28rem] sm:max-w-[24rem] max-w-[20rem] xl:h-[30rem] sm:h-[26rem] h-full bottom-0 xl:right-[10rem] right-0 bg-no-repeat bg-cover "
            ></img>
          </div>
        </SwiperSlide>
      </Swiper>
      <SelectCategory />
      <CatagorySection></CatagorySection>
      <ThemeSection></ThemeSection>
      <ProductList />
    </>
  );
};

export default HomePage;

function SelectCategory() {
  return (
    <>
      <section className="category-section px-[1.25rem] xl:px-20 md:px-10 sm:px-8 py-4 xl:py-10 sm:py-6    ">
        <div className="category-main-div grid xl:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 xl:gap-y-0 gap-y-4">
          <div className="flex flex-col items-start gap-6 xl:gap-10 w-auto h-auto category-cards ">
            <h5 className="text-[#000] text-[1.25rem] md:text-[2rem] sm:text-[1.5rem] xl:text-[3.5rem] ">
              CATEGORIES
            </h5>
            <p className="text-[0.875rem] sm:text-[1rem] xl:text-[1.25rem] text-[#000] max-w-[20rem]">
              Your text that informs customers about this section...
            </p>
          </div>
          <div className="flex w-auto h-auto items-center justify-center category-cards ">
            <Link to="https://dummyjson.com/products/category/mens-shirts" className="w-full h-[31.25rem] link-wrapper hover-img">
              <img
                src={MenCategory}
                alt="men with t-shirt"
                className="w-full h-full object-fill "
              />
              {/* THIS SPAN TAG SHOULD BE A SEPARATE COMPONENT WHEN USING API FETCH */}
              <span className="p text-[#fff] text-[1rem] px-[2rem]  ">Men</span>
            </Link>
          </div>
          <div className="flex w-auto h-auto items-center justify-center category-cards ">
            <Link to="https://dummyjson.com/products/category/womens-dresses" className="w-full h-[31.25rem] link-wrapper hover-img">
              <img
                src={WomenCategory}
                alt="women with t-shirt"
                className="w-full h-full object-fill "
              />
              {/* THIS SPAN TAG SHOULD BE A SEPARATE COMPONENT WHEN USING API FETCH */}
              <span className="p text-[#fff] text-[1rem] px-[2rem]  ">
                Women
              </span>
            </Link>
          </div>
          <div className="flex w-auto h-auto items-center justify-center category-cards ">
            <Link to="https://dummyjson.com/products/category/sunglasses" className="w-full h-[31.25rem] link-wrapper hover-img">
              <img
                src={CatSticker}
                alt="spider logo"
                className="w-full h-full object-fill "
              />
              {/* THIS SPAN TAG SHOULD BE A SEPARATE COMPONENT WHEN USING API FETCH */}
              <span className="p text-[#fff] text-[1rem] px-[2rem]  ">
                Sticker
              </span>
            </Link>
          </div>
          <div className="flex w-auto h-auto items-center justify-center category-cards ">
            <Link to="https://dummyjson.com/products/category/automotive" className="w-full h-[31.25rem] link-wrapper hover-img">
              <img
                src={CatCover}
                alt="mobile cover"
                className="w-full h-full object-fill "
              />
              {/* THIS SPAN TAG SHOULD BE A SEPARATE COMPONENT WHEN USING API FETCH */}
              <span className="p text-[#fff] text-[1rem] px-[2rem]  ">
                Cover
              </span>
            </Link>
          </div>
          <div className="flex w-auto h-auto items-center justify-center category-cards ">
            <Link to="https://dummyjson.com/products/categories" className="w-auto h-auto button_primary mt-6 sm:mt-0 ">
              <div className="button-inner">
                <span>
                  <p className="text-[1.25rem] me-5 ">All categories</p>
                  <svg
                    width="17.500000"
                    height="17.500000"
                    viewBox="0 0 17.5 17.5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs />
                    <path
                      id="Vector"
                      d="M3.5 0L3.5 1.75L14.5162 1.75L0 16.2664L1.23376 17.5L15.75 2.98364L15.75 14L17.5 14L17.5 0L3.5 0Z"
                      fill="#C6866B"
                      fillOpacity="1.000000"
                      fillRule="nonzero"
                    />
                  </svg>
                </span>
                <span>
                  <p className="text-[1.25rem] me-5 ">All categories</p>
                  <svg
                    width="17.500000"
                    height="17.500000"
                    viewBox="0 0 17.5 17.5"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <defs />
                    <path
                      id="Vector"
                      d="M3.5 0L3.5 1.75L14.5162 1.75L0 16.2664L1.23376 17.5L15.75 2.98364L15.75 14L17.5 14L17.5 0L3.5 0Z"
                      fill="#C6866B"
                      fillOpacity="1.000000"
                      fillRule="nonzero"
                    />
                  </svg>
                </span>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}

function CatagorySection() {
  return (
    <section className="catagory-section w-full flex flex-col p-8 xl:p-20 sm:p-12 justify-center items-center">
      <div className="catagory-header w-full flex justify-center mb-[3rem]">
        <h2 className="text-[#121212] text-[40px]">Catagory</h2>
      </div>
      <div className="catagory-main flex flex-col sm:flex-row gap-4 items-center">
        <div className="category-box w-auto h-auto relative ">
          <img
            src={menCatagory}
            className="w-full h-full object-contain"
            alt=""
          />
          <div className="category-hover flex justify-center absolute w-full  bottom-0 left-0 p-4   ">
            <h2 className="text-[1.25rem] text-[#fff]">MEN</h2>
          </div>
        </div>
        <div className="category-box w-auto h-auto relative">
          <img
            src={womenCatagory}
            className="w-full h-full object-contain"
            alt=""
          />
          <div className="category-hover flex justify-center absolute w-full  bottom-0 left-0 p-4   ">
            <h2 className="text-[1.25rem] text-[#fff]">WOMEN</h2>
          </div>
        </div>
      </div>
    </section>
  );
}

function ThemeSection() {
  return (
    <section className="theme-section w-full xl:px-12 sm:px-8 p-5">
      <div className="main-theme flex flex-col items-center justify-center">
        <h2 className="text-[#363636] xl:text-[2.5rem] sm:text-[1.5rem] my-8">
          FEATURED THEMES
        </h2>
        <div className="theme-carosol w-full">
          <Swiper
            modules={[Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={10}
            loop={true}
            Autoplay
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 2,
                spaceBetween: 10,
              },
              420: {
                slidesPerView: 3,
                spaceBetween: 10,
              },
              640: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 4,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 7,
                spaceBetween: 50,
              },
            }}
            className=""
          >
            <SwiperSlide>
              <Link to="#">
                <img
                  src={anime}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <p className="text-center">Anime</p>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="#">
                <img
                  src={cartoon}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <p className="text-center">Cartoon</p>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="#">
                <img src={glow} alt="" className="w-full h-full object-cover" />
                <p className="text-center">Glow in dark</p>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="#">
                <img src={geek} alt="" className="w-full h-full object-cover" />
                <p className="text-center">Geeks</p>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="#">
                <img
                  src={slogan}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <p className="text-center">Slogan</p>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="#">
                <img
                  src={superHero}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <p className="text-center">Super Hero</p>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="#">
                <img
                  src={funkey}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <p className="text-center">Funkey</p>
              </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to="#">
                <img
                  src={funny}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <p className="text-center">Funny</p>
              </Link>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}
