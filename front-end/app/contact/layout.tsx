export default function ContactLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="">
			<div className=" ">
				{children}
			</div>
		</section>
	);
}
