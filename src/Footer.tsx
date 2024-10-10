export default function Footer() {
	return (
		<footer className="bg-clarc-blue text-white py-16 px-4 lg:px-0">
			<div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
				<div className="flex flex-col items-start">
					<div className="flex items-center mb-4">
						<img src="https://scontent.fmnl9-5.fna.fbcdn.net/v/t39.30808-6/431963925_915159387277103_632830678809030111_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=6ee11a&_nc_ohc=EG0nO6DtNlYQ7kNvgGBPwd9&_nc_ht=scontent.fmnl9-5.fna&_nc_gid=AEcQme1MIs51qwFd-o7TM8N&oh=00_AYAN25wnEJSKQiSwwuTSzcMWrls6yLD9t6dhTMwjjfYwFQ&oe=670AA4CA" alt="Clarendon College Logo" className="square rounded-full w-10 h-10 lg:w-[2.3rem] lg:h-[2.3rem] mr-2" />

						<span className="text-2xl font-semibold font-astralaga text-clarc-gold">Clarendon College</span>
					</div>
					<p className="text-sm text-clarc-gold">&copy; {new Date().getFullYear()} Clarendon. All rights reserved.</p>
				</div>
				<div>
					<h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
					<address className="not-italic text-indigo-100">
						<p>Bayanihan St., Odiong</p>
						<p>Roxas, Oriental Mindoro</p>
						<p>
							Email:{" "}
							<a href="mailto:clarendoncollege@edu.ph" className="hover:underline">
								clarendoncollege@edu.ph
							</a>
						</p>
						<p>
							Phone:{" "}
							<a href="tel:+1234567890" className="hover:underline">
								(123) 456-7890
							</a>
						</p>
					</address>
				</div>

				<div>
					<h3 className="text-lg font-semibold mb-4">Learn More</h3>
					<ul className="space-y-2 text-indigo-100">
						<li>
							<a href="#" className="hover:underline">
								About Us
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Admissions
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Programs
							</a>
						</li>
						<li>
							<a href="#" className="hover:underline">
								Contact
							</a>
						</li>
					</ul>
				</div>
			</div>
		</footer>
	);
}
