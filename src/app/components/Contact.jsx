import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Calendar } from "lucide-react";

export default function Contact() {
  return (
    <div id="contact" className="py-20 bg-white dark:bg-gray-800">
      <div className="max-w-4xl mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl font-bold text-center mb-12 text-gray-800 dark:text-white"
        >
          Contact Information
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-blue-500" />
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  Email
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Faiza018@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-blue-500" />
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  Phone
                </h3>
                <p className="text-gray-600 dark:text-gray-300">85418 84260</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <MapPin className="w-6 h-6 text-blue-500" />
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  Office
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Alamgang Patna
                </p>
                <p className="text-gray-600 dark:text-gray-300">Patna City</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Calendar className="w-6 h-6 text-blue-500" />
              <div>
                <h3 className="font-semibold text-gray-800 dark:text-white">
                  Office Hours
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Monday - Sunday : 9:00 PM - 6:00 PM
                </p>
                <p className="text-gray-600 dark:text-gray-300">
                  Night: By appointment
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg shadow-lg"
          >
            <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
              Send a Message
            </h3>
            <form className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition-colors"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
