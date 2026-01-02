import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from "@/components/ui/sheet";
import { VisuallyHidden } from "@/components/ui/visually-hidden";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {

  const navItems = [
    { label: "Home", href: "/" },
    { label: "How It Works", href: "./howitworks" },
    { label: "Support", href: "/chat" },
    { label: "Products", href: "#products" },
    { label: "Contact", href: "./contact" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3">
          <Image
            src="/images/hello-solar-logo2.jpeg"
            alt="Hello Solar"
            width={60}
            height={60}
            className="rounded-full border-2 border-yellow-300"
          />
          {/* <span className="text-2xl font-bold text-primary-700 hidden sm:block">
            Hello Solar
          </span> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-gray-700 hover:text-primary-600 font-medium transition"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-64">
            <VisuallyHidden>
              <SheetTitle>Mobile Navigation Menu</SheetTitle>
            </VisuallyHidden>

            <div className="flex flex-col space-y-8 mt-20 px-4">
              <nav className="flex flex-col space-y-6">
                {navItems.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-lg text-gray-700 hover:text-primary-600 font-medium"
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>

              <div className="self-center">
                <Image
                  src="/images/hello-solar-logo2.jpeg"
                  alt="Hello Solar"
                  width={45}
                  height={45}
                  className="rounded-full border-2 border-yellow-300"
                />
                </div>

            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
