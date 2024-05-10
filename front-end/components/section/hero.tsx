import Link from "next/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code"
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import {Image} from "@nextui-org/image";


export default function Hero() {
  return (
    <section className="flex flex-col md:flex-row items-stretch justify-between gap-4 ">
			<div className="flex flex-col items-start justify-center gap-4 py-8 md:py-10">
			<div className="inline-block max-w-xl  justify-start">
				<h1 className={title()}>SafeLab AI Intelligent  &nbsp;</h1>
				<h1 className={title({ color: "blue" })}>Lab Safety Platform&nbsp;</h1>
				
				<h2 className={subtitle({ class: "mt-4" })}>
				Revolutionize lab safety with our digital software, utilizing computer 
        vision for real-time monitoring and alerting of safety protocol violations.
				</h2>
			</div>

			<div className="flex gap-3">
				<Link
					href='/signup'
					className="bg-indigo-500 px-6 py-3 rounded-lg text-white text-lg hover:bg-indigo-800 "
				>
					Sign Up
				</Link>
        <Link
					href='/signup'
					
				>
          <button className=" hover:before:bg-redborder-black relative py-3 rounded-lg w-40 overflow-hidden border border-black bg-white px-5  text-gray-800 shadow-xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-gradient-to-t from-indigo-900 to-indigo-800 before:transition-all before:duration-500 hover:text-white hover:border-white hover:before:left-0 hover:before:w-full"><span className="relative z-10 text-lg">View Demo</span></button>
					
				</Link>
				
			</div>
			
			</div>

			<div className="mt-8 max-w-xl flex justify-center">
			<Image
              width={500}
                 alt="NextUI hero Image"
                 src="/Capture.PNG"
               />
			  </div>
		    </section>
  )
}
