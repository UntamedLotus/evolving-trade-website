import React from "react";
import Hero from "@/components/features/certification/Hero";
import CertificationsList from "@/components/features/home/Certifications";
import { Metadata } from "next";
import CompanyProfile from "@/components/features/certification/CompanyProfile";

export const metadata: Metadata = {
    title: "Certifications",
    description: "Discover our certifications and commitment to quality standards including ISO, FSSAI, and Organic.",
};

const CertificationPage = () => {
    return (
        <main>
            <Hero />
            <CertificationsList />
            <CompanyProfile />
        </main>
    );
};

export default CertificationPage;
