import React from "react";

function InfoSection() {
  return (
    <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8 lg:pt-10 lg:mb-10">
      <div className="mx-auto max-w-3xl text-center">
        <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
          Loved by Sports Enthusiasts
        </h2>

        <p className="mt-4 text-equi-text sm:text-xl">
          Join thousands of sports lovers who trust us for high-quality gear,
          personalized options, and exceptional service. Let us power your
          passion!
        </p>
      </div>

      <dl className="mt-6 grid grid-cols-1 gap-4 sm:mt-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col rounded-lg bg-equi-primary-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-equi-text">
            Total Sales
          </dt>

          <dd className="text-4xl font-extrabold text-equi-primary-500 md:text-5xl">
            $4.8m
          </dd>
        </div>

        <div className="flex flex-col rounded-lg bg-equi-primary-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-equi-text">
            Total Outlets
          </dt>

          <dd className="text-4xl font-extrabold text-equi-primary-500 md:text-5xl">
            24
          </dd>
        </div>

        <div className="flex flex-col rounded-lg bg-equi-primary-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-equi-text">
            Employees
          </dt>

          <dd className="text-4xl font-extrabold text-equi-primary-500 md:text-5xl">
            110+
          </dd>
        </div>

        <div className="flex flex-col rounded-lg bg-equi-primary-100 px-4 py-8 text-center">
          <dt className="order-last text-lg font-medium text-equi-text">
            Customers
          </dt>

          <dd className="text-4xl font-extrabold text-equi-primary-500 md:text-5xl">
            86k
          </dd>
        </div>
      </dl>
    </div>
  );
}

export default InfoSection;
