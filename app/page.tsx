import Navbar from "@/components/Navbar";
import KeyboardScroll from "@/components/KeyboardScroll";
import FeaturesSection from "@/components/FeaturesSection";
import SpecsSection from "@/components/SpecsSection";
import GallerySection from "@/components/GallerySection";
import ReviewsSection from "@/components/ReviewsSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";
import Watermark from "@/components/Watermark";

export default function Home() {
    return (
        <main className="min-h-screen bg-[#ECECEC] scroll-smooth">
            <Navbar />
            <KeyboardScroll />
            <FeaturesSection />
            <SpecsSection />
            <GallerySection />
            <ReviewsSection />
            <ExperienceSection />
            <Footer />
            <Watermark />
        </main>
    );
}
