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
            <td className="w-44">Accessibility</td>
            <td className="w-44">DevOps</td>
            <td className="w-44">End-to-end testing</td>
          </tr>
          <tr>
            <td className="w-44">Git</td>
            <td className="w-44">HTML / CSS</td>
            <td className="w-44">Node.js</td>
          </tr>
          <tr>
            <td className="w-44">JavaScript</td>
            <td className="w-44">React</td>
            <td className="w-44">TypeScript</td>
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
              <span className="font-normal">
                , Pacific Residential Mortgage (2019-)
              </span>
            </h4>
          </header>
          <ul>
            <li>
              Redesign 500-page mobile-unfriendly Wordpress into Progressive Web
              App (
              <a href="https://pacresmortgage590360194.netlify.app">
                pacresmortgage.com
              </a>
              ).
            </li>
            <li>Reduce load time up to 15x on every page.</li>
            <li>
              Expand up to 20% more users by seeking accessibility compliance.
            </li>
            <li>
              Ship accurately and on time by introducing DevOps and
              end-to-end-testing.
            </li>
          </ul>
        </article>
        <article>
          <header>
            <h4>
              Full Stack Software Engineer
              <span className="font-normal">
                , Santa Clara University (2015-2019)
              </span>
            </h4>
          </header>
          <ul>
            <li>
              Launch all-new responsive web app to 250k monthly users (
              <a href="https://scu.edu">scu.edu</a>).
            </li>
            <li>
              Cooperate with leaders to design &amp; code pages viewed by
              millions every year.
            </li>
            <li>
              Create design system to unify hundreds of posts per month (
              <a href="https://brand.scu.edu">brand.scu.edu</a>).
            </li>
            <li>
              Upgraded front end design workflow with modern JavaScript tooling.
            </li>
          </ul>
        </article>
      </section>
      <section>
        <header>
          <h3>Personal work</h3>
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
