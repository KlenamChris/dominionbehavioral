import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Services = [
  { name: "Individual Therapy", href: "/individual-therapy" },
  { name: "Behavioral Support", href: "/behavioral-support" },
  { name: "Family Therapy", href: "/family-therapy" },
  { name: "Mental Health Services", href: "/mental-health-services" },
  { name: "Grief Therapy", href: "/grief-therapy" },
  { name: "Anger Management", href: "/anger-management" },
];

const Quick_Links = [
  { name: "Our Philosophy", href: "/about" },
  { name: "Bookings", href: "/book" },
  { name: "Therapist", href: "/therapist" },
  { name: "Contact", href: "/contact" },
  { name: "FAQs", href: "/faq" },
  { name: "Blog", href: "/blog" },
];

const Socials = [
  { name: "Twitter", href: "/twitter", icon: <FaXTwitter /> },
  { name: "LinkedIn", href: "/linkedin", icon: <FaLinkedin /> },
  { name: "Facebook", href: "/facebook", icon: <FaFacebook /> },
];

const Footer = () => {
  return (
    <div className="h-auto md:m-4 rounded-t-full md:rounded-3xl bg-slate-400 text-black" id="footer">
      <div className="md:flex h-72 w-full md:justify-center bg-slate-300 border-b-0 rounded-3xl">
        <div className="flex-col md:flex-row pt-8 p-4 md:w-full flex items-center md:space-x-2">
          <p className="text-left">
            Subscribe to our newsletters, our monthly look at crucial behavioral
            health issues globally.
          </p>
          <div className="flex flex-row mt-4 gap-3">
          <input
            type="email"
            id="email"
            placeholder="Your email address"
            className="w-xs border border-white/50 bg-white/50 rounded-full px-4 py-2 focus:outline-none hover:border-0 transition-transform duration-300"
            />
          <button className="py-3 px-3 md:py-3 md:px-8 rounded-full bg-white/45 hover:bg-white/70 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4" />
          </button>
            </div>
        </div>
      </div>
      <div className="pt-8 px-5 md:px-24 h-auto">
        <div className="flex md:justify-between p-8 ">
          {/* <div className="flex flex-col">
            <Link href={"/"}>
              <div className="md:flex items-center space-x-2 py-4 pb-8">
                <Image
                  alt="dominion-logo"
                  width={60}
                  height={60}
                  className="w-auto h-auto"
                  src={"/dominion-logo.png"}
                />
                <p className="font-bold text-2xl">Dominion Behavioral</p>
              </div>
            </Link>
            <p className="hover:text-white/25 transition-colors duration-300">
              Shrewsbury,
            </p>
            <p className="mb-3 hover:text-white/25 transition-colors duration-300">
              MA 01545
            </p>
            <Link
              href={"mailto:office@dominionbehavioral.com"}
              className="hover:text-white/25 transition-colors duration-300"
            >
              office@dominionbehavioral
            </Link>
            <Link href={"tel:(508) 625 7606"} className="hover:text-white/25 transition-colors duration-300">
              (508) 625-7606
            </Link>
          </div> */}
          {/* <div className="flex flex-col space-y-2">
            <p className="text-white/20 uppercase py-4">Services</p>
            {Services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="hover:text-white/25 transition-colors duration-300"
              >
                {service.name}
              </Link>
            ))}
          </div> */}
          {/* <div className="flex flex-col space-y-2">
            <p className="text-white/20 uppercase py-4">Quick Links</p>
            {Quick_Links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="hover:text-white/25 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div> */}
        </div>
        <hr className="mb-8" />
        <div className="grid grid-cols-1 space-y-5 md:flex md:justify-between font-light text-sm uppercase">
          <div className="order-last md:order-first hover:text-white/25 transition-colors duration-300">
            <p>
              &copy; {new Date().getFullYear()} Dominion Behavioral. All Rights
              Reserved
            </p>
          </div>
          <div className="space-x-4">
            <Link
              href="/terms-and-conditions"
              className="hover:text-white/25 transition-colors duration-300"
            >
              Terms
            </Link>
            <Link
              href="/privacy-policy"
              className="hover:text-white/25 transition-colors duration-300"
            >
              Privacy
            </Link>
          </div>
          <div className="order-first md:order-last flex md:flex text-2xl space-x-8 pb-8">
            {Socials.map((social) => (
              <Link
                key={social.name}
                href={social.href}
                className="hover:text-white/25 transition-colors duration-300"
              >
                {social.icon}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
