import ProductDesc from "@/components/section/about";
import ExampleComponent from "@/components/section/featureSection";
import FeaturesSection from "@/components/section/featureSection";
import Hero from "@/components/section/hero";
import Pricing from "@/components/section/pricing";



export default function Home() {
	return (
		<section className="flex flex-col  items-center justify-center gap-4 py-8 md:py-10">
			<Hero/>
			<ExampleComponent/>
			<ProductDesc/>
		</section>
	);
}
