import { motion } from 'framer-motion';

const educationData = [
  {
    degree: "Ph.D. in Computer Science",
    institution: "Stanford University",
    year: "2015-2019",
    description: "Specialized in Machine Learning and Artificial Intelligence"
  },
  {
    degree: "M.S. in Mathematics",
    institution: "MIT",
    year: "2013-2015",
    description: "Focus on Advanced Mathematical Computing"
  },
  {
    degree: "B.S. in Computer Science",
    institution: "UC Berkeley",
    year: "2009-2013",
    description: "Double major in Mathematics and Computer Science"
  }
];

export default function Education() {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gray-800"
        >
          Educational Background
        </motion.h2>
        
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="flex flex-col md:flex-row gap-4 items-start border-l-4 border-blue-500 pl-6 py-4"
            >
              <div className="md:w-32 font-medium text-gray-500">{edu.year}</div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{edu.degree}</h3>
                <p className="text-lg text-gray-600">{edu.institution}</p>
                <p className="text-gray-500 mt-2">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}