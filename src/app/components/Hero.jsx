import { motion } from "framer-motion";
import { GraduationCap, Mail, MapPin } from "lucide-react";
import faizImage from "../../../public/faiz.jpeg";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-sm" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center px-4"
      >
        <Zoom>
          <motion.img
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            src={faizImage.src}
            alt="Professor Smith"
            className="w-32 h-32 rounded-full mx-auto mb-6 object-cover border-4 border-white shadow-lg"
          />
        </Zoom>

        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold text-gray-800 mb-2"
        >
          Faiz Sir Patna
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="text-xl text-gray-600 mb-6"
        >
          Accounts And JEE-Main Teacher
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 text-gray-600"
        >
          <div className="flex items-center gap-2">
            <GraduationCap className="w-5 h-5" />
            <span>Ph.D. in Computer Science</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            <span>City University</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail className="w-5 h-5" />
            <span>faizAhmed@gmail.com</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
