import { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import type { FC } from "react";

export const meta: MetaFunction = function () {
  return {
    title: "Conner Davis | Resume",
  };
};

const ResumePage: FC = function () {
  return (
    <section className="p-8">
      <Link to="/">&larr; Return to home</Link>
      <header className="pt-8">
        <h2>My Resume</h2>
      </header>
      <section className="pb-8">
        <header>
          <h3>Skills</h3>
        </header>
        <ul className="grid grid-cols-2 md:grid-cols-4">
          <li>CI/CD</li>
          <li>Cypress</li>
          <li>Git/Github</li>
          <li>HTML/CSS/Sass</li>
          <li>Next.js</li>
          <li>Node.js</li>
          <li>React 18</li>
          <li>SQL</li>
          <li>Tailwind CSS</li>
          <li>TypeScript</li>
          <li>WCAG 2.1</li>
        </ul>
      </section>
      <section className="pb-8">
        <header>
          <h3>Full-time experience</h3>
        </header>
        <article className="pb-6">
          <header>
            <h4>
              Full Stack Software Engineer
              <span className="font-normal">, Shrood BI (2022)</span>
            </h4>
          </header>
          <ul>
            <li>
              Create B2B web apps for $100M+ annual sales eCommerce clients.
            </li>
            <li>
              Optimize future project completion time up to 20x with custom
              Next.js templates leveraging Prisma, CI & end-to-end testing.
            </li>
          </ul>
        </article>
        <article className="pb-6">
          <header>
            <h4>
              Full Stack Software Engineer
              <span className="font-normal">
                , Pacific Residential Mortgage (2020-2022)
              </span>
            </h4>
          </header>
          <ul>
            <li>
              Redesign 500-page Wordpress site in React & TypeScript (
              <a href="https://pacresmortgage.com">pacresmortgage.com</a>
              ), quickening load time 15x on every page.
            </li>
            <li>Market to 20% more users by introducing a11y conformance.</li>
            <li>Save 1000s of hours by automating routine content updates.</li>
            <li>Ship bug-free & on-time with Cypress & Github CI/CD.</li>
          </ul>
        </article>
        <article>
          <header>
            <h4>
              Full Stack Software Engineer
              <span className="font-normal">
                , Santa Clara University (2015-2020)
              </span>
            </h4>
          </header>
          <ul>
            <li>
              Launch responsive web app to 500,000 monthly users (
              <a href="https://scu.edu">scu.edu</a>).
            </li>
            <li>
              Unify branding across 10,000s of pages by creating Bootstrap-based
              design system (<a href="https://brand.scu.edu">brand.scu.edu</a>).
            </li>
            <li>
              Collaborate with university heads to design pages viewed by
              millions every year.
            </li>
          </ul>
        </article>
      </section>
      <section className="pb-8">
        <header>
          <h3>Contract experience</h3>
        </header>
        <article className="pb-6">
          <header>
            <h4>
              <code>Flowbite Pro: React Admin Dashboard</code>
            </h4>
            <p>
              After my open-source contributions to&nbsp;
              <code>flowbite-react</code>, the team at Themesberg asked me to
              create a React version of their beautiful Admin Dashboard. We just
              launched, and I'm very excited to see people use it.
            </p>
            <p>
              If you like Flowbite as much as I do, consider getting Flowbite
              Pro. It's pretty sweet, and it includes this React Admin
              Dashboard. You can&nbsp;
              <a href="https://flowbite.com/pro/#pricing">
                learn more about Flowbite Pro on their site
              </a>
              .
            </p>
            <p>
              There's also a completely free version of Flowbite's Admin
              Dashboard in React, which you can&nbsp;
              <a href="https://github.com/themesberg/flowbite-react-admin-dashboard">
                find on Github
              </a>
              !
            </p>
            <div className="flex gap-6">
              <a href="https://flowbite.com/react-admin-dashboard-pro/preview/">
                &rarr; View <code>Flowbite Pro: React Admin Dashboard</code>
              </a>
            </div>
          </header>
        </article>
        <article className="pb-6">
          <header>
            <h4>Suzanne Jauchius&apos;s website</h4>
          </header>
          <p>
            I redesigned an overly complicated Weebly site in&nbsp;
            <a href="https://remix.run">Remix</a> and&nbsp;
            <a href="https://tailwindcss.com">tailwindcss</a>. Changes can be
            made effortlessly, and go live in less than two minutes using&nbsp;
            <a href="https://pages.cloudflare.com/">Cloudflare Pages.</a>
          </p>
          <p>
            I also helped the client transition to a CRM, which immensely
            reduced the time they spend sending emails and organizing a
            handwritten datebook.
          </p>
          <a href="https://suzannejauchius.com">
            &rarr; View suzannejauchius.com
          </a>
        </article>
        <article>
          <header>
            <h4>The Law Office of Daniel A. Street website</h4>
          </header>
          <p>
            I converted a decade-old HTML website to a responsive Wordpress web
            app.
          </p>
          <p>
            I used Wordpress 5's blocks system to create a template the client
            can easily update on their own.
          </p>
          <a href="https://saclawyers.com">&rarr; View saclawyers.com</a>
        </article>
      </section>
      <section className="pb-8">
        <header>
          <h3>Personal work</h3>
        </header>
        <article className="pb-6">
          <header>
            <h4>
              <code>flowbite-react</code>
            </h4>
            <p>
              Since March 2022,&nbsp;
              <a href="https://github.com/themesberg/flowbite-react/pulls?q=is%3Apr+author%3Atulup-conner">
                I've made more than 65 merged pull requests to&nbsp;
                <code>flowbite-react</code> on Github.
              </a>
            </p>
            <p>
              <a href="https://flowbite.com">Flowbite</a> is an open source
              design system built on&nbsp;
              <a href="https://tailwindcss.com">Tailwind CSS</a>.&nbsp;
              <code>flowbite-react</code> brings that to your React site.
            </p>
            <p>
              Its first commit was in February, so I've been able to play a key
              role in:
            </p>
            <ul className="mb-3">
              <li>Creating components</li>
              <li>Resolving accessibility issues</li>
              <li>Writing unit tests</li>
              <li>Introducing end-to-end testing</li>
            </ul>
            <p>
              And, now, thanks to them, I am obsessed with{" "}
              <a href="https://storybook.js.org">Storybook</a> and&nbsp;
              <code>
                <a href="https://vitest.dev">vitest</a>
              </code>
              .
            </p>
            <div className="flex gap-6">
              <a href="https://flowbite-react.com">
                &rarr; View <code>flowbite-react</code> docs
              </a>
              <a href="https://github.com/themesberg/flowbite-react/pulls?q=is%3Apr+author%3Atulup-conner">
                &rarr; Browse my pull requests
              </a>
            </div>
          </header>
        </article>
        <article className="pb-6">
          <header>
            <h4>
              <code>Water Bear Design</code>
            </h4>
            <p>
              I love designing websites and apps, and I met someone who's really
              good at design, and we started a design agency together. We would
              love to work with you!
            </p>
            <p>
              The page is designed in React and Tailwind CSS, using&nbsp;
              <code>flowbite-react</code>, and deployed to Remix on Cloudflare
              Pages.
            </p>
            <div className="flex gap-6">
              <a href="https://waterbear.design">
                &rarr; View <code>waterbear.design</code>
              </a>
            </div>
          </header>
        </article>
        <article className="pb-6">
          <header>
            <h4>Plug.bot</h4>
          </header>
          <p>
            A "bookmarklet" anyone can add to their browser for extra features
            on <a href="https://plug.dj">Plug.dj</a>.
          </p>
          <p>
            During its use, it was downloaded by tens of thousands of unique
            users across the globe.
          </p>
          <p>
            This project's code is no longer on Github, but&nbsp;
            <a href="https://www.youtube.com/watch?v=IAi3AxI_0LM">
              here's a video of someone using it in 2013!
            </a>
          </p>
        </article>
        <article className="pb-6">
          <header>
            <h4>SCU Alumni Businesses</h4>
          </header>
          <p>
            A database for businesses owned by Santa Clara University alumni.
            Users can browse the database or submit their own business, which
            must be approved.
          </p>
          <p>
            The app is simple and served to help me learn a ton about full stack
            web development on Node.js and, in particular, REST APIs.
          </p>
          <a href="https://github.com/connergdavis/scu-alumni-businesses">
            &rarr; View the code
          </a>
        </article>
        <article className="pb-6">
          <header>
            <h4>SCU Courses</h4>
          </header>
          <p>
            Web app suggests class schedules to students at Santa Clara
            University by using their degree progress. Students select classes
            they have taken, the app generates efficient schedules with classes
            they still need.
          </p>
          <p>
            I presented and demoed SCU Courses live at the 2019 Santa Clara
            University School of Engineering Senior Design Conference. Check
            out&nbsp;
            <a href="https://scholarcommons.scu.edu/cseng_senior/148/">
              my senior thesis about the project
            </a>
            .
          </p>
          <a href="https://github.com/connergdavis/scu-courses">
            &rarr; View the code
          </a>
        </article>
        <article className="pb-6">
          <header>
            <h4>Simple C Compiler</h4>
          </header>
          <p>
            A compiler for a made-up language, "Simple C", using a context-free
            grammar specified by my professor in Formal Language Theory &amp;
            Compiler Construction at SCU.
          </p>
          <p>
            The compiler includes semantic and syntactic checking with
            compilation error reports. The code generator produces executable
            Assembly code for 64-bit Intel machines running Linux. This was my
            favorite thing in school.
          </p>
          <a href="https://github.com/connergdavis/simple-c-compiler">
            &rarr; View the code
          </a>
        </article>
        <article>
          <header>
            <h4>Web Audio Visualizer</h4>
          </header>
          <p>
            Really simple web app built with React and TypeScript. Uses Web
            Audio API, a fairly new web standard, to visualize audio waveforms.
            Supports direct input through a microphone as well as recorded
            tracks.
          </p>
          <a href="https://github.com/connergdavis/web-audio-visualizer">
            &rarr; View the code
          </a>
        </article>
      </section>
      <section>
        <header>
          <h3>Education</h3>
        </header>
        <p>Bachelor of Science, Computer Science &amp; Engineering</p>
        <p>Santa Clara University (2015-2019)</p>
      </section>
    </section>
  );
};

export default ResumePage;
