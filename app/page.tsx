import Image from "next/image";
import { motion } from "framer-motion";
console.log("motion:", motion);


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-16 bg-gradient-to-br from-white via-gray-50 to-gray-100 text-gray-800">
      <div className="max-w-3xl w-full text-center">
        <div className="mb-10">
          <h1 className="text-5xl font-extrabold mb-4 leading-tight">
            Hey friends at Vercel! I'm Kristen 🧁
          </h1>
          <p className="text-lg">
            I'm currently a Technical Customer Success Manager at{" "}
            <a
              href="https://cloudinary.com"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-500 transition font-semibold"
            >
              Cloudinary
            </a>{" "}
            seeking my next challenge. I’m extremely passionate and see myself as
            multi-faceted - specializing in emotional intelligence, education,
            and problem solving.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-3">💡 Customer Strategy & Collaboration</h2>
          <ul className="text-left list-disc list-inside space-y-2 text-md">
            <li>CSM at Cloudinary - partnering with media, DAM, and dev teams to drive outcomes</li>
            <li>Deep background in marketing, tech education, and internal enablement</li>
            <li>Fluent in product conversations: HTML/CSS, some JS/React, and creative problem-solving</li>
            <li>Skilled in synthesizing feedback and influencing cross-functional teams</li>
            <li>Known for building rapport and trust - both internally and externally</li>
          </ul>
        </div>

        <div className="mb-6">
          <motion.h2
            className="text-2xl font-semibold mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            ✨ Interests & Side Quests
          </motion.h2>
          <motion.div
            className="space-y-4 text-left"
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.1 }}
            viewport={{ once: true }}
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              I currently live in Chicago - constantly torn between being a city girl or a nature girl at heart. I love the energy of the city but feel most at peace surrounded by trees, trails, or a body of water.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              I have an ever-growing love for moving and taking care of my body and mind, and I’m always finding new areas where I’m capable. I’m just a couple of short weeks away from finishing my <strong>Yoga Teacher Training</strong> (which has taken up loads of life lately in all the best ways!) and I can’t wait to kick off this side hustle! 🧘‍♀️
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              I’m also working toward a <strong>certification in Nutrition</strong>, which feels like a natural next step. You’ll find me in the gym daily—unless it’s warm season in Chicago, in which case I’ll be soaking up as much sun as possible training for triathlons. I’ve been racing for years and might never pass the “amateur” title… but it’s a fun challenge :) My bike might be my best friend.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              I just got back from a short road trip to <strong>Shawnee National Forest</strong> with my boyfriend (Brian) and our doggo (Nitro). We try to adventure when and where we can—travel is such a special treat, whether with company or when riding solo.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              We share our home with our two adorable cats, <strong>Alice</strong> and <strong>Morty</strong>, and we’re still (a year later!) taking suggestions on how to fully unlock the cats ↔ dog bond... we feel like we’ve tried it all. 🐱🐱🐶
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              I’m a sucker for time with friends and a good event -<strong>live music</strong>, podcast recordings, markets, and everything in between. I also love creative outlets to balance out my work brain and spend time with activities like wheel throwing and getting dirty with clay - also “amateur potter” 😄).
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              I genuinely love meeting all kinds of people, and I hope for the chance to get to know more of you!
            </motion.p>
          </motion.div>
        </div>

        <div className="mb-8">
          <a
            href="https://www.linkedin.com/in/kmdunne/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Connect with me on LinkedIn
          </a>
        </div>

        <div className="mb-10">
          <img
            src="https://res.cloudinary.com/dh7gi8p79/image/upload/c_scale,w_400,f_auto,q_auto/yavepujbfpskxun7ddhm.jpg"
            alt="Kristen"
            className="rounded-full w-40 h-40 object-cover mx-auto shadow-md"
          />
        </div>

        <p className="text-sm text-gray-500">Built with ❤️ using Next.js and deployed on Vercel</p>
      </div>
    </main>
  );
}