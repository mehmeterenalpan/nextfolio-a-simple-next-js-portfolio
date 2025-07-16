import Image from "next/image";
import { socialLinks } from "./lib/config";

export default function Page() {
  return (
    <section className="max-w-3xl mx-auto px-6 py-12">
      <Image
        src="/profile.png"
        alt="Profile photo"
        className="rounded-full bg-gray-100 block mt-0 mb-10 mx-auto sm:float-right sm:ml-5 sm:mb-5 grayscale hover:grayscale-0"
        unoptimized
        width={160}
        height={160}
        priority
      />
      <h1 className="mb-4 text-3xl font-semibold">Mehmet Eren Alpan</h1>
      <p className="mb-2 text-lg text-gray-600 dark:text-gray-400">
        Aspiring Ethical Hacker | Builder | Explorer
      </p>
      <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
        Building things that matter. Exploring tech, education, and security.
      </p>

      <div className="prose prose-neutral dark:prose-invert">
        <h2>About Me</h2>
        <p>
          I'm an 18-year-old student passionate about cybersecurity, robotics, and competitive programming.
          I've led FRC teams, earned my CEH certification, and helped organize national coding competitions.
          I love building real-world solutions through code and learning by doing.
        </p>
      </div>
    </section>
  );
}
