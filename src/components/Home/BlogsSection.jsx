import React from "react";

function BlogsSection() {
  return (
    <>
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Stay Updated with Sports Gear Insights
        </h2>

        <p className="mt-4 text-equi-text sm:text-xl">
          Explore expert tips, product guides, and trends to elevate your game
          and performance.
        </p>
      </div>

      <div className="grid grid-cols-3 gap-5 mt-10 mb-10 lg:mb-20">
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
          <img
            alt=""
            src="https://i.ibb.co.com/hyKwHjW/blog1.jpg"
            className="h-56 w-full object-cover"
          />

          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">
                Top 5 Cricket Bats for Maximum Power and Precision
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Discover the best cricket bats offering unmatched power,
              precision, and durability for players of all levels. Learn what
              makes these bats stand out and how to choose the right one for
              your style.
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </article>
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
          <img
            alt=""
            src="https://i.ibb.co.com/zncdCbg/blog2.jpg"
            className="h-56 w-full object-cover"
          />

          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">
                Essential Gear Every Football Player Should Invest In
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Upgrade your football kit with high-quality essentials, from
              durable cleats to protective gear. Enhance your game with
              equipment designed to boost performance and ensure safety on the
              field.
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </article>
        <article className="overflow-hidden rounded-lg border border-gray-100 bg-white shadow-sm">
          <img
            alt=""
            src="https://i.ibb.co.com/6tmdQjx/blog3.jpg"
            className="h-56 w-full object-cover"
          />

          <div className="p-4 sm:p-6">
            <a href="#">
              <h3 className="text-lg font-medium text-gray-900">
                Best Yoga Mats for Comfort and Grip in 2024
              </h3>
            </a>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
              Explore yoga mats that provide excellent cushioning, stability,
              and non-slip surfaces. Perfect for all levels, these mats combine
              comfort with eco-friendly materials for a mindful practice.
            </p>

            <a
              href="#"
              className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600"
            >
              Find out more
              <span
                aria-hidden="true"
                className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
              >
                &rarr;
              </span>
            </a>
          </div>
        </article>
      </div>
    </>
  );
}

export default BlogsSection;
