
const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=600&fit=crop"
              alt="Profile"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
          
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">About Me</h2>
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Hello! I'm a passionate frontend developer with a keen eye for design and a love for creating 
                exceptional digital experiences. My journey in web development started with curiosity and has 
                evolved into a deep passion for crafting beautiful, functional websites.
              </p>
              
              <p>
                I specialize in modern JavaScript frameworks, particularly React, and I'm always excited to 
                learn new technologies and best practices. I believe that great web development combines 
                technical excellence with thoughtful user experience design.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new design trends, contributing to open-source 
                projects, or sharing my knowledge with the developer community. I'm always open to new 
                opportunities and interesting projects.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What I Do</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  'Frontend Development',
                  'UI/UX Design',
                  'Responsive Design',
                  'Performance Optimization',
                  'Code Review',
                  'Mentoring'
                ].map((item) => (
                  <div key={item} className="flex items-center">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
