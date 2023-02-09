import { Link } from "remix";

export default function Resume(): JSX.Element {
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
        <table>
          <tr>
            <td className="w-44">CI / CD</td>
            <td className="w-44">Communication</td>
            <td className="w-44">Cypress</td>
            <td className="w-44">Git / Github</td>
          </tr>
          <tr>
            <td className="w-44">HTML / CSS</td>
            <td className="w-44">Next.js</td>
            <td className="w-44">Node.js</td>
            <td className="w-44">React</td>
          </tr>
          <tr>
            <td className="w-44">SQL</td>
            <td className="w-44">Tailwind CSS</td>
            <td className="w-44">TypeScript</td>
            <td className="w-44">WCAG</td>
          </tr>
        </table>
      </section>
      <section className="pb-8">
        <header>
          <h3>Experience</h3>
        </header>
        <article className="pb-6">
          <header>
            <h4>
              Full Stack Software Engineer
              <span className="font-normal">, Shrood BI (current)</span>
            </h4>
          </header>
          <ul>
            <li>
              Create full stack web apps in Next.js for B2B eCommerce clients
              doing $100M+ in yearly revenue.
            </li>
            <li>
              Introduce CI/CD and testing with Docker, Cypress, and more,
              greatly improving quality and turnaround time.
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
              Redesign 500-page mobile-unfriendly Wordpress as Gatsby
              Progressive Web App (
              <a href="https://pacresmortgage590360194.netlify.app">
                pacresmortgage.com
              </a>
              ).
            </li>
            <li>Optimize load time 15x faster on every page.</li>
            <li>
              Expand to up to 20% more users by introducing WCAG conformance.
            </li>
            <li>
              Ship accurately and on time with Cypress end-to-end testing,
              Github CI workflows.
            </li>
            <li>
              Save hundreds of hours of manual work per year by automating
              content updates.
            </li>
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
              Launch all-new responsive web app to 500,000 monthly users (
              <a href="https://scu.edu">scu.edu</a>).
            </li>
            <li>
              Lear Node to create design system unifying brand in hundreds of
              thousands of pages (
              <a href="https://brand.scu.edu">brand.scu.edu</a>).
            </li>
            <li>
              Cooperate with department leaders to design pages viewed by
              millions every year.
            </li>
          </ul>
        </article>
      </section>
      <section>
        <header>
          <h3>Personal work</h3>
          <article className="pb-6">
            <header>
              <h4>
                <code>flowbite-react</code>
              </h4>
              <p>
                Since March 2022,&nbsp;
                <a href="https://github.com/themesberg/flowbite-react/pulls?q=is%3Apr+author%3Atulup-conner">
                  I've made over 55 merged pull requests to&nbsp;
                  <code>flowbite-react</code> on Github.
                </a>
              </p>
              <p>
                <a href="https://flowbite.com">Flowbite</a> is an open source
                design system centered around&nbsp;
                <a href="https://tailwindcss.com">TailwindCSS</a>.&nbsp;
                <code>flowbite-react</code> brings that to your React site.
              </p>
              <p>
                Its first commit was in February, so I've been able to play a
                key role in:
              </p>
              <ul className="mb-3">
                <li>Creating components</li>
                <li>Resolving accessibility issues</li>
                <li>Writing unit tests</li>
                <li>Introducing end-to-end testing</li>
              </ul>
              <p>
                And, now, thanks to them, I am obsessed with Storybook and&nbsp;
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
              <h4>Suzanne Jauchius&apos;s website</h4>
            </header>
            <p>
              I redesigned an overly complicated Weebly site in&nbsp;
              <a href="https://remix.run">Remix</a> and&nbsp;
              <a href="https://tailwindcss.com">tailwindcss</a>. Changes can be
              made effortlessly, and go live in less than two minutes
              using&nbsp;
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
          <article className="pb-6">
            <header>
              <h4>The Law Office of Daniel A. Street website</h4>
            </header>
            <p>
              I converted a decade-old HTML website to a responsive Wordpress
              web app.
            </p>
            <p>
              I used Wordpress 5's blocks system to create a template the client
              can easily update on their own.
            </p>
            <a href="https://saclawyers.com">&rarr; View saclawyers.com</a>
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
              The app is simple and served to help me learn a ton about full
              stack web development on Node.js and, in particular, REST APIs.
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
              they have taken, the app generates efficient schedules with
              classes they still need.
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
              A compiler for a made-up language, "Simple C", using a
              context-free grammar specified by my professor in Formal Language
              Theory &amp; Compiler Construction at SCU.
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
              Audio API, a fairly new web standard, to visualize audio
              waveforms. Supports direct input through a microphone as well as
              recorded tracks.
            </p>
            <a href="https://github.com/connergdavis/web-audio-visualizer">
              &rarr; View the code
            </a>
          </article>
        </header>
      </section>
      <section className="py-8">
        <header>
          <h3>Education</h3>
        </header>
        <p>Bachelor of Science, Computer Science &amp; Engineering</p>
        <p>Santa Clara University (2015-2019)</p>
      </section>
    </section>
  );
}
