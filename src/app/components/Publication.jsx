import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

const publications = [
  {
    title: "Advanced Machine Learning Algorithms in Education",
    journal: "Journal of Educational Technology",
    year: "2023",
    citation: "Published in Volume 45, Issue 3, Pages 234-251",
    link: "#",
  },
  {
    title: "The Impact of AI on Modern Mathematics Education",
    journal: "International Mathematics Research Papers",
    year: "2022",
    citation: "Published in Volume 28, Issue 2, Pages 89-112",
    link: "#",
  },
  {
    title: "Innovative Teaching Methods in Computer Science",
    journal: "Computer Science Education Review",
    year: "2021",
    citation: "Published in Volume 33, Issue 1, Pages 45-67",
    link: "#",
  },
];

export default function Publications() {
  return (
    <div id="publications" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gray-800"
        >
          Recent Publications
        </motion.h2>

        <div className="space-y-6">
          {publications.map((pub, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start gap-4">
                <BookOpen className="w-6 h-6 text-blue-500 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800  mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-blue-600  font-medium mb-1">
                    {pub.journal}
                  </p>
                  <p className="text-gray-600  text-sm mb-2">{pub.citation}</p>
                  <p className="text-gray-500  text-sm">
                    Published in {pub.year}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
