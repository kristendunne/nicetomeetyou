import Image from "next/image";

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
            multi-faceted — specializing in emotional intelligence, education,
            and problem solving.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-3">💡 Customer Strategy & Collaboration</h2>
          <ul className="text-left list-disc list-inside space-y-2 text-md">
            <li>CSM at Cloudinary — partnering with media, DAM, and dev teams to drive outcomes</li>
            <li>Deep background in marketing, tech education, and internal enablement</li>
            <li>Fluent in product conversations: HTML/CSS, some JS/React, and creative problem-solving</li>
            <li>Skilled in synthesizing feedback and influencing cross-functional teams</li>
            <li>Known for building rapport and trust — both internally and externally</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-2">🌿 Interests & Side Quests</h2>
          <p className="text-md text-left">
            I'm just a couple weeks away from completing my 200-hour Yoga Teacher Training — it’s been one of the most fulfilling journeys and I can’t wait to kick off this side hustle! 🧘‍♀️ <br /><br />
            I’m a big believer in mind-body balance: daily gym time is non-negotiable, and I’ve been an amateur triathlete for several years. <br /><br />
            Creativity fuels me — I’m also an amateur potter (yes, I throw clay on a wheel!) and I love live events, from music and podcast recordings to quirky community happenings. <br /><br />
            Travel is a must — I prioritize at least one good solo trip a year, and just returned from Shawnee National Forest with my boyfriend and our dog. <br /><br />
            Speaking of — I’ve got 3 fur babies: a goofy pup and two amazing cats. 🐾 <br /><br />
            I genuinely love connecting with all kinds of people, and I’d be so excited to learn more about you too.
          </p>
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