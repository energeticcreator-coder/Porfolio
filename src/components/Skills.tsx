
import { Code, Book, Github } from 'lucide-react';

const Skills = () => {
  const skills = [
    {
      category: 'Frontend',
      icon: <Code className="w-8 h-8" />,
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Tailwind CSS'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      category: 'Design',
      icon: <Book className="w-8 h-8" />,
      technologies: ['UI/UX Design', 'Figma', 'Adobe XD', 'Responsive Design', 'Wireframing'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      category: 'Tools & Others',
      icon: <Github className="w-8 h-8" />,
      technologies: ['Git', 'GitHub', 'VS Code', 'npm/yarn', 'Webpack', 'Vite'],
      color: 'from-green-500 to-emerald-500'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Technologies</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            I love working with modern technologies to create amazing web experiences
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <div
              key={skill.category}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${skill.color} p-4 text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {skill.icon}
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{skill.category}</h3>
              <div className="space-y-2">
                {skill.technologies.map((tech) => (
                  <div
                    key={tech}
                    className="inline-block bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm font-medium mr-2 mb-2 hover:bg-gray-200 transition-colors"
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
