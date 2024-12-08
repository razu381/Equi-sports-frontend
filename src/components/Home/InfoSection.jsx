import React, { useContext } from "react";
import { ThemeContext } from "../../pages/Home";

function InfoSection() {
  let { isLight } = useContext(ThemeContext);
  return (
    <div
      className={`mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:pt-10 lg:mb-10 ${
        isLight ? "equi-light-mode" : "equi-dark-mode"
      }`}
    >
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold  sm:text-4xl">
          Loved by Sports Enthusiasts
        </h2>

        <p className="mt-4  sm:text-xl">
          Join thousands of sports lovers who trust us for high-quality gear,
          personalized options, and exceptional service. Let us power your
          passion!
        </p>
      </div>

      <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
        <div
          className={`flex flex-col rounded-lg ${
            isLight ? "bg-equi-primary-100" : "bg-equi-primary-700"
          } px-4 py-8 text-center`}
        >
          <dt className="order-last text-lg font-medium ">Total Sales</dt>

          <dd className="text-4xl font-extrabold text-equi-primary-500 md:text-5xl">
            $4.8m
          </dd>
        </div>

        <div
          className={`flex flex-col rounded-lg ${
            isLight ? "bg-equi-primary-100" : "bg-equi-primary-700"
          } px-4 py-8 text-center`}
        >
          <dt className="order-last text-lg font-medium ">Total Outlets</dt>

          <dd className="text-4xl font-extrabold text-equi-primary-500 md:text-5xl">
            24
          </dd>
        </div>

        <div
          className={`flex flex-col rounded-lg ${
            isLight ? "bg-equi-primary-100" : "bg-equi-primary-700"
          } px-4 py-8 text-center`}
        >
          <dt className="order-last text-lg font-medium ">Employees</dt>

          <dd className="text-4xl font-extrabold text-equi-primary-500 md:text-5xl">
            110+
          </dd>
        </div>

        <div
          className={`flex flex-col rounded-lg ${
            isLight ? "bg-equi-primary-100" : "bg-equi-primary-700"
          } px-4 py-8 text-center`}
        >
          <dt className="order-last text-lg font-medium ">Customers</dt>

          <dd className="text-4xl font-extrabold text-equi-primary-500 md:text-5xl">
            86k
          </dd>
        </div>
      </dl>
    </div>
  );
}

export default InfoSection;
