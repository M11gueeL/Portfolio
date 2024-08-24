import { WorkExperienceData } from './WorkExperienceData.js';

const WorkExperience = () => {
	return (
		<main className="bg-gradient-to-bl from-blue-400 to-black pb-10">
			<h2 className="text-3xl text-white text-center py-8">Experiencia laboral</h2>

			{WorkExperienceData.map((Work, index) => (
				<div key={index} className="grid grid-cols-1 md:grid-cols-2 bg-gray-100 sm:mx-10 my-8 sm:rounded-2xl">
					<div className="flex justify-center">
						<img 
							src={Work.companyLogo} 
							alt={Work.company}
							className="w-54 h-38" 
						/>
					</div>
					<div className="p-10 m-2 text-center md:text-left font-bold">
						<h2 className="text-3xl py-4">{Work.company}</h2>
						<h3>{Work.role}</h3>
						<p className="font-normal">{Work.description}</p>
					</div>
				</div>
			))}
		</main>
	);
};

export default WorkExperience;
