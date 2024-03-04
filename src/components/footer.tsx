import { Typography, Button, Input } from "@material-tailwind/react";

const SUB_LINKS = ["Claim", "Privacy", "Terms"];
const CURRENT_YEAR = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="mt-10 px-8 pt-20">
      <div className="container mx-auto">
        <div className="mt-16 flex flex-wrap items-center justify-center gap-y-4 gap-x-8 border-t border-blue-gray-50 py-6 md:justify-between">
          <Typography className="text-center font-normal !text-gray-700" placeholder='explanation'>
            &copy; {CURRENT_YEAR} Made with{" "}
            <a href="https://www.material-tailwind.com" target="_blank">
              AI Video Showcase
            </a>{" "}
            by{" "}
            <a href="https://www.creative-tim.com" target="_blank">
              Deep Computer Vision LAB
            </a>
            .
          </Typography>

          <ul className="flex items-center">
            {SUB_LINKS.map((link, idx) => (
              <li key={link}>
                <Typography
                  as="a"
                  href="#"
                  className={`py-1 font-normal !text-gray-700 transition-colors hover:!text-gray-900 ${idx === SUB_LINKS.length - 1 ? "pl-2" : "px-2"
                    }`}
                  placeholder='explanation'
                >
                  {link}
                </Typography>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
