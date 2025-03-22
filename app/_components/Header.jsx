import Image from "next/image";
import Link from "next/link";

const socialMedia = [
  {
    href: "https://www.facebook.com/share/15vvRHN5Xy/",
    src: "/images/facebook.svg",
    alt: "Facebook",
  },
  {
    href: "https://www.instagram.com/shiixxshaa/profilecard/?igsh=MWhkOTl3eHJ0bDRmaw==",
    src: "/images/instagram.svg",
    alt: "Instagram",
  },
  {
    href: "https://www.linkedin.com/in/shiksha-rupayan-57668129b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    src: "/images/linkedin.svg",
    alt: "Linkedin",
  },
  {
    href: "shikshapaikar725@gmail.com",
    src: "/images/mail.svg",
    alt: "Email",
  },
  {
    href: "https://wa.me/message/UX34ZWMQGNURE1",
    src: "/images/whatsapp.svg",
    alt: "Whatsapp",
  },
];

const navLinks = [
  {
    href: "#about",
    text: "About",
  },
  {
    href: "#works",
    text: "Works",
  },
  {
    href: "#contacts",
    text: "Contacts",
  },
];

function Header() {
  return (
    <header className="w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-6 md:gap-0 py-6">
      <div className="flex flex-nowrap gap-6">
        {socialMedia.map((social, index) => {
          return index == 3 ? (
            <Link
              key={index}
              href={`mailto:${social.href}?subject=${encodeURIComponent(
                "Inquiry from Your Portfolio Website"
              )}&body=${encodeURIComponent(
                "Hello [Your Name],\n\nI came across your portfolio and I'm really impressed with your work! I'd love to connect and discuss potential opportunities.\n\nLooking forward to your response.\n\nBest regards,\n[Your Name]"
              )}`}
              aria-label="Email"
              className="hover:rotate-y-360 transition-transform duration-700 ease-in-out"
            >
              <Image
                src={social.src}
                alt={social.alt}
                height={30}
                width={30}
                className="object-cover"
                aria-hidden="true"
              />
            </Link>
          ) : (
            <Link
              key={index}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              aria-label={social.alt}
              className="hover:rotate-y-360 transition-transform duration-700 ease-in-out"
            >
              <Image
                src={social.src}
                alt={social.alt}
                height={30}
                width={30}
                className="object-cover"
                aria-hidden="true"
              />
            </Link>
          );
        })}
      </div>
      <nav>
        <ul className="flex flex-wrap justify-center items-center gap-6 font-semibold">
          {navLinks.map((link, index) => {
            return (
              <li
                key={index}
                className="py-1 px-3 md:px-6 border-2 border-black rounded-4xl hover:bg-black hover:text-white transition-colors duration-700 ease-in-out"
              >
                <Link href={link.href} aria-label={link.text}>
                  {link.text}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
