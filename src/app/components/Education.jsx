import { motion } from "framer-motion";

const educationData = [
  {
    degree: "Masters in Computer Application",
    institution: "Maulana Mazharul Haque Arabic & Parsian University ",
    year: "2012-2014",
    description: "Specialized In computer Application With Higher Degree",
  },
  {
    degree: "Bachlor in Computer Application",
    institution: "Maulana Mazharul Haque Arabic & Parsian University ",
    year: "2009-2012",
    description: "Double major in Mathematics and Computer Science",
  },
  {
    degree: "I.Com",
    institution: "Oriental College,Patna City",
    year: "2007-2009",
    description: "Focus on Advanced Accounting and Mathematics",
  },
  {
    degree: "10th",
    institution: "Dr. Zakir Hussain High School",
    year: "2005-2007",
    description: "Specialized in Machine Learning and Artificial Intelligence",
  },
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
              <div className="md:w-32 font-medium text-gray-500">
                {edu.year}
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {edu.degree}
                </h3>
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
