import { WorkExperienceData } from './WorkExperienceData.js';

const WorkExperience = () => {
	return (
		<section className="bg-transparent">
			<h2 className="text-3xl text-white text-center py-6">Experiencia laboral</h2>

			<div className="space-y-6">
				{WorkExperienceData.map((work, idx) => (
					<article key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-lg grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
									<div className="md:col-span-4 flex items-center justify-center">
										<div className="w-28 h-28 md:w-40 md:h-40 rounded-lg bg-white/6 flex items-center justify-center p-4">
											<img src={work.companyLogo} alt={work.company} className="max-h-24 md:max-h-28 object-contain" />
										</div>
									</div>

						<div className="md:col-span-8">
							<h3 className="text-xl font-bold text-white">{work.company}</h3>
							<p className="text-sm text-blue-200 font-semibold mt-1">{work.role}</p>
							<p className="mt-3 text-gray-300">{work.description}</p>
						</div>
					</article>
				))}
			</div>
		</section>
	);
};

export default WorkExperience;
