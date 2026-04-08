import { JSX } from "react";

export default function Loading(): JSX.Element {
	return (
		<div className='flex flex-col items-center justify-center min-h-screen bg-white'>
			<div className="w-16 h-16 border-4 border-primary-blue border-t-tertiary-ocean rounded-full animate-spin mb-4"></div>
			<p className='text-xl font-medium text-primary-blue animate-pulse'>
				Loading...
			</p>
		</div>
	);
}
