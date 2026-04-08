import Link from "next/link";
import { Home, AlertCircle } from "lucide-react";

export default function NotFound() {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-secondary-grey/20 text-primary-blue px-4">
            <div className="flex flex-col items-center max-w-lg text-center space-y-6">
                <div className="relative">
                    <h1 className="text-9xl font-bold text-primary-blue/10">404</h1>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <AlertCircle className="w-24 h-24 text-primary-ocean animate-bounce" />
                    </div>
                </div>

                <h2 className="text-3xl font-bold text-primary-blue">Page Not Found</h2>

                <p className="text-primary-grey text-lg">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                <Link
                    href="/"
                    className="flex items-center gap-2 bg-primary-blue text-white px-8 py-3 rounded-lg font-medium hover:bg-primary-ocean transition-colors duration-300 shadow-lg"
                >
                    <Home className="w-5 h-5" />
                    Back to Home
                </Link>
            </div>
        </div>
    );
}
