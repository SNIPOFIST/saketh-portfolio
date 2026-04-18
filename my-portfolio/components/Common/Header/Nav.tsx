import { Variants, motion } from "framer-motion";
import { Rotate as Hamburger } from "hamburger-react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import NextLink from "next/link";

const navItems = [
  { name: "Home",     href: "/" },
  { name: "Overview", href: "/overview" },
  { name: "Projects", href: "/projects" },
];

const mobileMenuVariants: Variants = {
  open: {
    x: 0,
    display: "flex",
    transition: { type: "spring", duration: 0.6, staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    x: "100%",
    transition: { type: "spring", duration: 0.6 },
  },
};

const itemVariants: Variants = {
  open:   { y: 0, opacity: 1 },
  closed: { y: 50, opacity: 0 },
};

export default function Nav() {
  const { asPath } = useRouter();
  const [open, setOpen] = useState(false);

  useEffect(() => { setOpen(false); }, [asPath]);

  return (
    <>
      {/* Desktop */}
      <ul className="hidden list-none space-x-1 md:flex">
        {navItems.map((item) => {
          const active = asPath === item.href || (item.href !== "/" && asPath.startsWith(item.href));
          return (
            <li key={item.href}>
              <NextLink
                href={item.href}
                className={[
                  "font-pokemon text-[0.5rem] px-3 py-1.5 rounded transition-all duration-200",
                  active
                    ? "bg-poke-red text-white"
                    : "text-gray-400 hover:text-poke-yellow hover:bg-white/5",
                ].join(" ")}
                style={active ? { boxShadow: "0 0 10px rgba(204,0,0,0.4)" } : {}}
              >
                {item.name}
              </NextLink>
            </li>
          );
        })}
      </ul>

      {/* Mobile */}
      <div className="md:hidden">
        <Hamburger toggled={open} toggle={setOpen} rounded size={22} direction="right" label="Menu" color="#FFD700" />
        <motion.ul
          className="absolute left-0 z-50 flex h-screen w-full list-none flex-col space-y-6 bg-poke-dark px-8 pt-16 md:hidden"
          variants={mobileMenuVariants}
          initial="closed"
          animate={open ? "open" : "closed"}
          style={{ top: 0, borderRight: "1px solid rgba(255,215,0,0.15)" }}
        >
          {navItems.map((item) => (
            <motion.li key={item.href} variants={itemVariants}>
              <NextLink
                href={item.href}
                className="font-pokemon text-[0.7rem] text-gray-300 hover:text-poke-yellow transition-colors"
              >
                ▶ {item.name}
              </NextLink>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </>
  );
}
