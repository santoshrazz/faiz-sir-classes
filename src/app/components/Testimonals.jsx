import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Tushar Kumar",
    role: "Former Student, Now Software Engineer at Walsis",
    content:
      "Faiz sir hamare best sir hai pure patna ke JEE Mains ke liye koi inke jaisa nahi padha sakta likh ke deta hu",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100",
  },
  {
    name: "Prashant Verma",
    role: "Graduate Student, Stanford University",
    content:
      "Jalwa hai Faiz sir ka bus patna me hi nahi balki pure bihar me Har jagah. Sir-o me sir only faiz sir",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100",
  },
  {
    name: "Shubham Kumar",
    role: "Doctor At AIIMS Patna",
    content:
      "His innovative teaching approach and real-world examples helped me develop a deeper understanding of mathematical concepts.",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&h=100",
  },
];

export default function Testimonials() {
  return (
    <div className="py-20 bg-gradient-to-br from-indigo-50 to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gray-800"
        >
          Student Testimonials
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg p-6 shadow-lg relative"
            >
              <Quote className="w-8 h-8 text-blue-500 mb-4" />
              <p className="text-gray-600 mb-6">{testimonial.content}</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-gray-800">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
