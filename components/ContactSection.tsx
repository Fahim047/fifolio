const ContactSection = () => {
	return (
		<section className="py-12">
			<div className="container mx-auto px-4">
				<h2 className="text-2xl font-bold text-center mb-8 text-emerald-400">
					Get In Touch
				</h2>
				<div className="max-w-4xl mx-auto flex flex-col gap-8">
					<div className="flex-1 bg-primary p-6 rounded-lg shadow-md">
						<form className="space-y-5">
							<div>
								<label
									htmlFor="name"
									className="block text-sm font-bold text-blue-400 mb-1"
								>
									Name
								</label>
								<input
									type="text"
									id="name"
									name="name"
									className="bg-transparent w-full px-3 py-2 border border-gray-600  rounded-md focus:outline-hidden focus:ring-2 focus:ring-blue-400"
									placeholder="Enter your name"
								/>
							</div>
							<div>
								<label
									htmlFor="email"
									className="block text-sm font-bold text-blue-400 mb-1"
								>
									Email
								</label>
								<input
									type="email"
									id="email"
									name="email"
									className="bg-transparent w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-hidden focus:ring-2 focus:ring-blue-400"
									placeholder="Enter your email address"
								/>
							</div>
							<div>
								<label
									htmlFor="message"
									className="block text-sm font-bold text-blue-400 mb-1"
								>
									Message
								</label>
								<textarea
									id="message"
									name="message"
									className="h-40 bg-transparent w-full px-3 py-2 border border-gray-600 rounded-md focus:outline-hidden focus:ring-2 focus:ring-blue-400 resize-none"
									placeholder="Your message here..."
								></textarea>
							</div>
							<button
								type="submit"
								className="w-full bg-blue-400 text-[#0C121e] py-2 px-4 rounded-md hover:bg-blue-500 transition duration-300 ease-in-out focus:outline-hidden focus:ring-2 focus:ring-blue-300"
							>
								Send Message
							</button>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ContactSection;
