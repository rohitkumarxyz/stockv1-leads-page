import { motion } from 'framer-motion';
import { Star, Quote, TrendingUp, Shield, Target } from 'lucide-react';

interface TestimonialsProps {
  onContactClick: () => void;
}

const Testimonials = ({ onContactClick }: TestimonialsProps) => {
  // Function to get initials from name
  const getInitials = (name: string) => {
    return name.split(' ').map(word => word[0]).join('').toUpperCase();
  };

  const testimonials = [
    {
      name: 'Manoj Gupta',
      role: 'Business Owner',
      content: 'Trade Stock has transformed my investment approach completely. Their expert analysis and timely calls have helped me make informed decisions. The team is professional and always available for guidance.',
      rating: 5
    },
    {
      name: 'Saloni Taneja',
      role: 'Trader',
      content: 'I was skeptical about research services, but Trade Stock proved me wrong. Their research-backed strategies and risk management techniques have been game-changers for my portfolio.',
      rating: 5
    },
    {
      name: 'Rahul Sharma',
      role: 'Trader',
      content: 'The best stock research service I have ever used. Their intraday calls are highly accurate and the support team is exceptional. Highly recommended for serious traders.',
      rating: 5
    }
  ];

  const stats = [
    { icon: TrendingUp, value: '10K+', label: 'Hours of Research' },
    { icon: Shield, value: '2K+', label: 'Happy Clients' },
    { icon: Target, value: '1500+', label: 'Trades Executed' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-primary-100 text-primary-600 rounded-full px-4 py-2 mb-6"
          >
            <Star className="w-4 h-4" />
            <span className="text-sm font-medium">Client's Testimonials</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            What Our Clients
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-secondary-500">
              Say About Us
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Don't just take our word for it. Here's what our satisfied clients have to say 
            about their experience with Trade Stock Research Services.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-gradient-to-br from-primary-50 to-secondary-50 rounded-2xl"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 w-12 h-12 bg-gradient-to-r from-primary-100 to-secondary-100 rounded-full flex items-center justify-center">
                <Quote className="w-6 h-6 text-primary-600" />
              </div>

              {/* Rating */}
              <div className="flex items-center space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 leading-relaxed mb-6">
                "{testimonial.content}"
              </p>

              {/* Client Info */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-lg">{getInitials(testimonial.name)}</span>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Start your journey with Trade Stock and become part of our growing community of successful traders.
            </p>
            <motion.button
              onClick={onContactClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 inline-flex items-center space-x-2"
            >
              <span>Get Started Today</span>
              <TrendingUp className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
