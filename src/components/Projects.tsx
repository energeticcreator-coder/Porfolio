
import { Github, Link } from 'lucide-react';
import { CardDescription } from './ui/card';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'A modern e-commerce platform built with React and Tailwind CSS, featuring responsive design and smooth animations.',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=500&h=300&fit=crop',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Node.js'],
      github: 'https://github.com/yourusername/project1',
      demo: 'https://yourproject1.com'
    },
    {
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and intuitive drag-and-drop functionality.',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&h=300&fit=crop',
      technologies: ['React', 'JavaScript', 'CSS3', 'Firebase'],
      github: 'https://github.com/energeticcreator-coder/TaskFlow-',
      demo: 'https://v0-task-management-application-drab.vercel.app/'
    },
    {
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing modern web development practices and creative design solutions.',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=500&h=300&fit=crop',
      technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
      github: 'https://github.com/energeticcreator-coder/porfolio',
      demo: 'https://eugenemahaso.netlify.app/'
    },
    {
      title: 'Delicious Discovery',
      description: 'A responsive platform where all food lovers get to share different food recipies from all around the world. ',
      image: '/workspaces/Porfolio/src/components/imgs/img1.jpg',
      technologies:['TypeScript','Tailwind CSS','React','Node.js','Express.js','Supabase'],
      github:'https://github.com/energeticcreator-coder/Recipe-Share',
      demo:'https://deliciousdiscovery.netlify.app/'
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for web development
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-blue-600/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.github}
                      className="p-3 bg-white rounded-full text-blue-600 hover:bg-gray-100 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.demo}
                      className="p-3 bg-white rounded-full text-blue-600 hover:bg-gray-100 transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Link size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
