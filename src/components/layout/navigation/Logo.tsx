import Link from "next/link";
import Image from "next/image";

const Logo = () => {
	return (
		<Link href='/' className='flex items-center gap-2 group'>
			<Image
				src='/images/logos/evolving-trade-footer-logo.webp'
				alt='Evolving Trade Solutions Logo'
				width={80}
				height={40}
				className='w-auto object-contain'
			/>
		</Link>
	);
};

export default Logo;
