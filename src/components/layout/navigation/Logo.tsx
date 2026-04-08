import Link from "next/link";
import Image from "next/image";

const Logo = () => {
    return (
        <Link href="/" className="flex items-center gap-2 group">
            <Image
                src="/evolving-trade-solutions-logo-croped.webp"
                alt="Evolving Trade Solutions Logo"
                width={500}
                height={60}
                className="h-10 w-auto object-contain"
            />
            <p className="font-semibold text-primary-blue text-xl md:text-2xl">Evolving Trade Solutions</p>
        </Link>
    );
};

export default Logo;
