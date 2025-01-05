const ExperienceCard = ({ job }) => {
	return (
		<div key={index} className="flex items-start space-x-4">
			<div className="w-12 h-12 rounded-lg bg-gray-800 overflow-hidden flex-shrink-0">
				<Image
					src={job.logo}
					alt={`${job.company} logo`}
					width={48}
					height={48}
					className="object-cover"
				/>
			</div>
			<div className="flex-1">
				<h3 className="font-medium text-lg">{job.company}</h3>
				<p className="text-gray-400">{job.role}</p>
				<p className="text-sm text-gray-500">{job.period}</p>
			</div>
		</div>
	);
};

export default ExperienceCard;
