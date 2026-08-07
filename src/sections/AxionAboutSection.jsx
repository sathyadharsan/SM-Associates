import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const SMALL_IMAGE_URL = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090123_74be96d4-9c1b-40cf-932a-96f4f4babed3.png&w=1280&q=85';
const LARGE_IMAGE_URL = 'https://images.higgs.ai/?default=1&output=webp&url=https%3A%2F%2Fd8j0ntlcm91z4.cloudfront.net%2Fuser_38xzZboKViGWJOttwIXH07lWA1P%2Fhf_20260516_090133_c157d30b-a99a-4477-bec1-a446149ec3f2.png&w=1280&q=85';

export default function AxionAboutSection() {
  const renderCtaButton = () => (
    <Link
      to="/services"
      className="group text-white text-[13px] sm:text-[14px] font-medium rounded-full pl-5 sm:pl-6 pr-2 py-2 inline-flex items-center gap-3 bg-[#0072BC] hover:bg-[#005f9e] transition-colors duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
    >
      <div className="overflow-hidden h-[20px]">
        <div className="flex flex-col transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] group-hover:-translate-y-1/2">
          <span className="h-[20px] flex items-center">Explore solutions</span>
          <span className="h-[20px] flex items-center">Explore solutions</span>
        </div>
      </div>
      <div className="bg-white w-7 h-7 sm:w-8 sm:h-8 rounded-full flex items-center justify-center shrink-0">
        <ArrowRight
          size={14}
          className="text-[#0072BC] transition-transform -rotate-45 group-hover:rotate-0 duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)]"
        />
      </div>
    </Link>
  );

  return (
    <section className="bg-white pt-16 sm:pt-20 lg:pt-32 pb-12 sm:pb-16 lg:pb-24 overflow-hidden font-sans">
      <div className="max-w-[1440px] mx-auto">
        {/* Badge row */}
        <div className="px-5 sm:px-8 lg:px-12 flex items-center gap-3 mb-6 sm:mb-8">
          <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#0072BC] text-white flex items-center justify-center text-[11px] sm:text-[12px] font-semibold">
            01
          </div>
          <span className="text-[12px] sm:text-[13px] font-semibold tracking-wider uppercase text-gray-500 font-mono">
            Our Story
          </span>
        </div>

        {/* Heading */}
        <h2 className="px-5 sm:px-8 lg:px-12 text-[clamp(1.5rem,4vw,3.2rem)] font-medium leading-[1.12] tracking-[-0.02em] text-gray-900 mb-12 sm:mb-16 lg:mb-28 text-left">
          Enterprise recovery solutions, delivering
          <span className="sm:hidden"> </span>
          <br className="hidden sm:block" />
          banking-grade performance since 2000.
        </h2>

        {/* Content area - MOBILE / TABLET layout */}
        <div className="lg:hidden px-5 sm:px-8 text-left">
          <p className="text-[15px] sm:text-[17px] leading-[1.6] font-medium text-gray-900 mb-4">
            What began in 2000 as a focused collections practice for India's leading banks has grown into full-spectrum enterprise recovery — tele-calling, field operations, SARFAESI enforcement, legal recovery and due diligence, delivered end to end.
          </p>
          <p className="text-[13.5px] sm:text-[14.5px] leading-[1.6] text-gray-600 mb-6 pt-4 border-t border-gray-200">
            From our first mandates with SBI Cards, LIC Housing Finance and ICICI Bank in 2004, we've scaled to 19 branch offices across six states and 1,500+ trained staff — now serving 100+ banks, NBFCs and ARCs including Axis Bank, HDFC Bank and Bajaj Finance.
          </p>
          <div className="mb-8">
            {renderCtaButton()}
          </div>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-5">
            <div className="sm:w-[45%]">
              <img
                src={SMALL_IMAGE_URL}
                alt="About small preview"
                className="w-full aspect-[438/346] rounded-xl sm:rounded-2xl object-cover"
              />
            </div>
            <div className="sm:w-[55%]">
              <img
                src={LARGE_IMAGE_URL}
                alt="About large preview"
                className="w-full aspect-[900/600] rounded-xl sm:rounded-2xl object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content area - DESKTOP layout */}
        <div className="hidden lg:grid grid-cols-[26%_1fr_48%] items-end gap-6 xl:gap-8 px-5 sm:px-8 lg:px-12 text-left">
          {/* Left Column */}
          <div className="self-end w-full">
            <img
              src={SMALL_IMAGE_URL}
              alt="About small preview"
              className="w-full aspect-[438/346] rounded-2xl object-cover"
            />
          </div>

          {/* Center Column */}
          <div className="self-start flex flex-col justify-end h-full">
            <p className="text-[16px] xl:text-[18px] leading-[1.6] font-medium text-gray-900 mb-4">
              What began in 2000 as a focused collections practice for India's leading banks has grown into full-spectrum enterprise recovery — tele-calling, field operations, SARFAESI enforcement, legal recovery and due diligence, delivered end to end.
            </p>
            <p className="text-[13px] xl:text-[14px] leading-[1.6] text-gray-600 mb-6 pt-4 border-t border-gray-200">
              From our first mandates with SBI Cards, LIC Housing Finance and ICICI Bank in 2004, we've scaled to 19 branch offices across six states and 1,500+ trained staff — now serving 100+ banks, NBFCs and ARCs including Axis Bank, HDFC Bank and Bajaj Finance.
            </p>
            <div className="flex">
              {renderCtaButton()}
            </div>
          </div>

          {/* Right Column */}
          <div className="self-end w-full">
            <img
              src={LARGE_IMAGE_URL}
              alt="About large preview"
              className="w-full aspect-[3/2] rounded-2xl object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
