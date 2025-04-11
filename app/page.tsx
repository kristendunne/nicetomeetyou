import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 py-12 bg-white text-gray-800">
      <div className="max-w-3xl w-full text-center">
        <h1 className="text-4xl font-bold mb-4">Hi Vercel! 👋 I'm Kristen</h1>
        <p className="text-lg mb-6">
          I'm a Customer Success Manager with a love for web technology, storytelling through data,
          and empowering teams to build faster and smarter.
        </p>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">💼 Professional Highlights</h2>
          <ul className="text-left list-disc list-inside space-y-2">
            <li>CSM at Cloudinary — working with media, DAM, and dev teams</li>
            <li>Background in marketing, tech education, and team enablement</li>
            <li>Technical chops: HTML/CSS, some JS/React, and comfortable in product</li>
          </ul>
        </div>
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">🌱 Interests</h2>
          <p>
            EDM and indie music, creative writing, yoga, exploring Chicago’s food scene, and a deep love for cool digital experiences ✨
          </p>
        </div>
        <div className="mt-6">
          <a
            href="https://www.linkedin.com/in/kmdunne/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          >
            Connect with me on LinkedIn
          </a>
        </div>
        <div className="mb-6">
          <img
            src="https://res.cloudinary.com/dh7gi8p79/image/upload/c_scale,w_400,f_auto,q_auto/yavepujbfpskxun7ddhm.jpg"
            alt="Kristen"
            className="rounded-full w-40 h-40 object-cover mx-auto mb-4"
          />
        </div>
        <div className="mt-8">
          <p className="text-sm text-gray-500">Built with ❤️ using Next.js and deployed on Vercel</p>
        </div>
      </div>
    </main>
  )
}

