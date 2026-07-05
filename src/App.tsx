import React from 'react';
import {
  MapPin,
  Phone,
  Clock,
  Star,
  CheckCircle,
  Dumbbell,
  Users,
  Wind
} from 'lucide-react';
import { motion } from 'motion/react';

const REVIEWS = [
  {
    name: 'Lokman Hossen LiMoN',
    rating: 5,
    date: 'a year ago',
    text: '✔️ Clean Environment: Well-maintained, hygienic, and motivating. ✔️ Good Facilities: Modern equipment, Wi-Fi, steam/sauna options. ✔️ Friendly Staff & Trainers: Supportive, knowledgeable, and approachable.',
  },
  {
    name: 'Khadija Akter Mim',
    rating: 5,
    date: 'a year ago',
    text: '“The variety of classes offered here is fantastic. Whether it\'s yoga, Zumba, or weight training, every class feels designed with women in mind. I’ve never enjoyed working out as much as I do now, and I love the results!”',
  },
  {
    name: 'Md Nahidul Islam',
    rating: 5,
    date: '4 years ago',
    text: 'From every circumstances i think this is the best gym in savar. The gym owner maruf vai managed the whole gym with 15 yrs experience.',
  },
  {
    name: 'Minhaz Asif (Svn)',
    rating: 5,
    date: 'a year ago',
    text: 'This gym in Savar offers ample workout space, quality equipment, and excellent trainers, creating a supportive environment. Overall, it\'s a great place for fitness enthusiasts.',
  },
  {
    name: 'Dr.Sazzad Pathan (Bappy)',
    rating: 5,
    date: 'a year ago',
    text: 'As a Doctor, i always suggest my patients to do exercise for 1 hour.. This 1 hour is your personal investment for being healthy and enthusiastic.. In terms of this gym, in rich with equipments and trainers.',
  },
  {
    name: 'sanjida akter',
    rating: 5,
    date: 'a year ago',
    text: '"This gym isn’t just about working out; it’s about community. I’ve made some amazing friends here. We motivate each other, and the group classes are so much fun."',
  },
  {
    name: 'Shariful Islam Shishir',
    rating: 5,
    date: 'a year ago',
    text: 'Good position beside highway road. Well equipped with a spacious place with natural air flow. Trainers are good, and all gym equipment is also functional.',
  },
  {
    name: 'abhinash purbey',
    rating: 5,
    date: 'a year ago',
    text: 'As a foreign medical student i have been training here for than 3 year nd the gym along with environment feels like home❤️',
  },
];


function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? 'text-yellow-500 fill-yellow-500' : 'text-zinc-600'
          }`}
        />
      ))}
    </div>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans selection:bg-red-500/30">
      {/* Navbar */}
      <nav className="fixed top-0 w-full z-50 bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Dumbbell className="w-8 h-8 text-red-600" />
            <span className="text-2xl font-black text-white tracking-tighter uppercase">
              Muscle Power Gym
            </span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#overview" className="hover:text-red-500 transition-colors">Overview</a>
            <a href="#facilities" className="hover:text-red-500 transition-colors">Facilities</a>
            <a href="#reviews" className="hover:text-red-500 transition-colors">Reviews</a>
            <a
              href="https://wa.me/8801713516986"
              target="_blank"
              rel="noreferrer"
              className="bg-red-600 text-white px-5 py-2.5 rounded-full hover:bg-red-700 transition-colors flex items-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Join Now
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2000&auto=format&fit=crop"
            alt="Gym Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/80 to-transparent" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-sm font-medium text-red-500 mb-6">
              <Star className="w-4 h-4 fill-current" />
              4.5 (195 Reviews)
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-white leading-tight mb-6 tracking-tight uppercase">
              Transform Your <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-red-700">
                Body & Mind
              </span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-400 mb-10 max-w-2xl leading-relaxed">
              The best workout routine and equipment in Savar. Join a strong fitness community, achieve your goals, and unlock your true potential at Muscle Power Gym.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="https://wa.me/8801713516986"
                target="_blank"
                rel="noreferrer"
                className="bg-red-600 text-white px-8 py-4 rounded-full font-bold hover:bg-red-700 transition-all hover:scale-105 inline-flex items-center gap-2"
              >
                Start Your Journey
              </a>
              <a
                href="#reviews"
                className="bg-zinc-900 text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition-all border border-zinc-800"
              >
                Read Reviews
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Facilities Section */}
      <section id="facilities" className="py-24 px-4 bg-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 md:flex justify-between items-end">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-5xl font-black text-white uppercase tracking-tight mb-6">
                Our Facilities
              </h2>
              <p className="text-zinc-400 text-lg leading-relaxed">
                Experience a gym designed for results. From heavy-duty machinery to a community that pushes you forward, Muscle Power Gym has everything you need.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-8 bg-zinc-950 rounded-3xl p-8 md:p-12 border border-zinc-800 relative overflow-hidden group"
            >
              <div className="absolute inset-0 z-0">
                 <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=1200&auto=format&fit=crop" alt="Heavy equipment" className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-r from-zinc-950 to-transparent"></div>
              </div>
              <div className="relative z-10 flex flex-col justify-center h-full max-w-md">
                <Dumbbell className="w-12 h-12 text-red-500 mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Modern Equipment</h3>
                <p className="text-zinc-400 text-lg">
                  Heavy and top-notch machines specifically curated for all muscle groups, ensuring you never have to wait for your sets.
                </p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="md:col-span-4 bg-zinc-950 rounded-3xl p-8 md:p-12 border border-zinc-800 flex flex-col justify-center"
            >
              <Users className="w-10 h-10 text-red-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Expert Trainers</h3>
              <p className="text-zinc-400">
                Knowledgeable, supportive, and approachable staff ready to guide your fitness journey.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="md:col-span-4 bg-zinc-950 rounded-3xl p-8 md:p-12 border border-zinc-800 flex flex-col justify-center"
            >
              <CheckCircle className="w-10 h-10 text-red-500 mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">Clean Environment</h3>
              <p className="text-zinc-400">
                Well-maintained, hygienic, and spacious workout areas to keep you focused.
              </p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-8 bg-zinc-950 rounded-3xl p-8 md:p-12 border border-zinc-800 relative overflow-hidden group"
            >
              <div className="absolute inset-0 z-0">
                 <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=1200&auto=format&fit=crop" alt="Spacious gym" className="w-full h-full object-cover opacity-30 group-hover:opacity-40 transition-opacity duration-700" />
                 <div className="absolute inset-0 bg-gradient-to-l from-zinc-950 to-transparent"></div>
              </div>
              <div className="relative z-10 flex flex-col justify-center h-full ml-auto max-w-md text-right items-end">
                <Wind className="w-12 h-12 text-red-500 mb-6" />
                <h3 className="text-3xl font-bold text-white mb-4">Natural Air Flow</h3>
                <p className="text-zinc-400 text-lg">
                  A spacious facility designed with natural air flow, providing a refreshing and comfortable atmosphere.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-12 px-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4">
          <img src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=800&auto=format&fit=crop" alt="Gym weights" className="rounded-3xl h-64 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          <img src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=800&auto=format&fit=crop" alt="Gym training" className="rounded-3xl h-64 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
          <img src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&w=800&auto=format&fit=crop" alt="Gym equipment" className="rounded-3xl h-64 w-full object-cover grayscale hover:grayscale-0 transition-all duration-500" />
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="py-24 px-4 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tight mb-4">
                Member Stories
              </h2>
              <p className="text-zinc-400 max-w-xl">
                Don't just take our word for it. Hear what our fitness community has to say about their experience.
              </p>
            </div>
            <div className="flex items-center gap-4 bg-zinc-900 border border-zinc-800 p-6 rounded-3xl">
              <div className="text-5xl font-black text-white">4.5</div>
              <div>
                <StarRating rating={5} />
                <div className="text-sm text-zinc-400 mt-1">Based on 195 reviews</div>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {REVIEWS.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1, duration: 0.4 }}
                className="bg-zinc-900 p-8 rounded-3xl border border-zinc-800 flex flex-col h-full"
              >
                <StarRating rating={review.rating} />
                <p className="mt-6 text-zinc-300 leading-relaxed flex-grow text-sm">
                  {review.text}
                </p>
                <div className="mt-8 flex items-center justify-between border-t border-zinc-800/50 pt-4">
                  <div className="font-medium text-white">{review.name}</div>
                  <div className="text-xs text-zinc-500">{review.date}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer & Location */}
      <footer id="overview" className="border-t border-zinc-900 bg-black pt-20 pb-10 px-4">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Dumbbell className="w-8 h-8 text-red-600" />
              <span className="text-2xl font-black text-white tracking-tighter uppercase">
                Muscle Power
              </span>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed mb-6">
              The premier fitness destination in Savar. Offering top-tier equipment, expert guidance, and a thriving community to help you become the best version of yourself.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Working Hours</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex justify-between text-zinc-400">
                <span>Sunday</span>
                <span className="text-white font-medium">6 AM – 11 PM</span>
              </li>
              <li className="flex justify-between text-zinc-400">
                <span>Monday</span>
                <span className="text-white font-medium">6 AM – 11 PM</span>
              </li>
              <li className="flex justify-between text-red-400">
                <span>Tuesday</span>
                <span className="font-medium">Closed</span>
              </li>
              <li className="flex justify-between text-zinc-400">
                <span>Wednesday</span>
                <span className="text-white font-medium">6 AM – 11 PM</span>
              </li>
              <li className="flex justify-between text-zinc-400">
                <span>Thursday</span>
                <span className="text-white font-medium">6 AM – 11 PM</span>
              </li>
              <li className="flex justify-between text-zinc-400">
                <span>Friday</span>
                <span className="text-white font-medium">6 AM – 11 PM</span>
              </li>
              <li className="flex justify-between text-zinc-400">
                <span>Saturday</span>
                <span className="text-white font-medium">6 AM – 11 PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 uppercase tracking-wider text-sm">Contact & Location</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-zinc-400 text-sm">
                <MapPin className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block mb-2">Savar, Dhaka, Bangladesh<br/>(Beside highway road, Savar New Market basement)</span>
                  <a 
                    href="https://share.google/wJuv5PtlKtBIYVQUV" 
                    target="_blank" 
                    rel="noreferrer" 
                    className="text-red-500 hover:text-red-400 font-medium inline-flex items-center transition-colors"
                  >
                    View on Google Maps &rarr;
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-3 text-zinc-400 text-sm">
                <Phone className="w-5 h-5 text-red-500 shrink-0" />
                <span>01713-516986</span>
              </li>
              <li>
                <a
                  href="https://wa.me/8801713516986"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 text-red-500 hover:text-red-400 font-medium transition-colors"
                >
                  Message on WhatsApp &rarr;
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto text-center border-t border-zinc-900 pt-8 text-xs text-zinc-600">
          &copy; {new Date().getFullYear()} Muscle Power Gym. All rights reserved.
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/8801713516986"
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:scale-110 transition-transform flex items-center justify-center group"
        aria-label="Contact us on WhatsApp"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
        </svg>
        <span className="absolute right-full mr-4 bg-zinc-900 text-white text-sm font-medium px-4 py-2 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity border border-zinc-800">
          Chat with us!
        </span>
      </a>
    </div>
  );
}
