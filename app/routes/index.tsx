import { MetaFunction } from "@remix-run/cloudflare";
import { Link } from "@remix-run/react";
import type { FC } from "react";

export const meta: MetaFunction = function () {
  return {
    title: "Conner Davis | Full Stack Software Engineer",
  };
};

const IndexPage: FC = function () {
  return (
    <div className="p-8 grid grid-cols-1 gap-y-8">
      <Summary />
      <WhatIveDelivered />
      <WhatImWorkingOn />
      <MyResume />
      <Contact />
    </div>
  );
};

const Summary: FC = function () {
  return (
    <section>
      <header>
        <h1>Hi there!</h1>
      </header>
      <p className="font-bold">
        My name is Conner Davis, and I'm a full stack software engineer with 8
        years of professional experience delivering complex web applications for
        eCommerce clients, higher education institutions, and others.
      </p>
      <p>
        The definition has changed over time, but what I really love is (in no
        particular order):
      </p>
      <ul className="py-3">
        <li>Designing beautiful things.</li>
        <li>Shipping proven code.</li>
        <li>Creating accessible products.</li>
        <li>Automating repeated tasks.</li>
        <li>Learning cutting-edge technology.</li>
        <li>Eating chocolate chip cookies.</li>
      </ul>
      <p>
        I've been working professionally since 2015, but I started writing HTML
        when I was 10 years old, and I've been obsessed ever since.
      </p>
      <p>
        You can read more about my professional experience by browsing&nbsp;
        <Link to="/resume">my resume</Link>.
      </p>
      <p>
        I'm active in open source, with&nbsp;
        <a href="https://github.com/themesberg/flowbite-react/pulls?q=is%3Apr+author%3Atulup-conner">
          50+ pull requests to flowbite-react
        </a>
        , a promising new Tailwind CSS-based React component library.
      </p>
    </section>
  );
};

const WhatIveDelivered: FC = function () {
  return (
    <section>
      <header>
        <h2>What I've delivered</h2>
      </header>
      <ul>
        <li>
          <a href="https://github.com/themesberg/flowbite-react-admin-dashboard">
            Flowbite: React Admin Dashboard (free)
          </a>
        </li>
        <li>
          <a href="https://flowbite.com/react-admin-dashboard-pro/preview/">
            Flowbite Pro: React Admin Dashboard
          </a>
        </li>
        <li>
          <a href="https://waterbear.design">Water Bear Design</a>
        </li>
        <li>
          <a href="https://flowbite-react.com">
            <code>flowbite-react</code>
          </a>
        </li>
        <li>
          <a href="https://scu.edu">Santa Clara University website</a>
        </li>
        <li>
          <a href="https://brand.scu.edu">
            Santa Clara University design system
          </a>
        </li>
        <li>
          <a href="https://pacresmortgage.com">
            Pacific Residential Mortgage website
          </a>
        </li>
        <li>
          <a href="https://suzannejauchius.com">
            Suzanne Jauchius&apos;s website
          </a>
        </li>
        <li>
          <a href="https://saclawyers.com">
            Law Office of Daniel A. Street website
          </a>
        </li>
        <li>
          <a href="https://connerdavis.xyz">This website</a>
        </li>
      </ul>
    </section>
  );
};

const WhatImWorkingOn: FC = function () {
  return (
    <section>
      <header>
        <h2>What I'm working on right now</h2>
      </header>
      <ul className="pb-3">
        <li>
          <a href="https://tulup.io/brand">tulup.io</a>
        </li>
        <li>
          <a href="https://flowbite-react.com">flowbite-react</a>
          &nbsp;(open source contributor)
        </li>
      </ul>
      <p>
        You can find my open-source contributions on GitHub under the
        aliases&nbsp;
        <a href="https://github.com/connergdavis">connergdavis</a> and&nbsp;
        <a href="https://github.com/tulup-conner">tulup-conner</a>.
      </p>
    </section>
  );
};

const MyResume: FC = function () {
  return (
    <section>
      <header>
        <h2>Check out my resume</h2>
      </header>
      <p>
        <Link to="/resume">
          <span className="sr-only">My resume </span> In your browser
        </Link>
      </p>
      <p>
        <Link to="conner-davis-resume.pdf">
          <span className="sr-only">My resume </span> As a PDF
        </Link>
      </p>
      <p>
        <span className="sr-only">My resume </span>
        <a href="https://www.linkedin.com/in/connergdavis/">On LinkedIn</a>
      </p>
    </section>
  );
};

const Contact: FC = function () {
  return (
    <section>
      <header>
        <h2>Get in contact</h2>
      </header>
      <table>
        <tbody>
          <tr>
            <td className="w-32">Email</td>
            <td>
              <a href="mailto:conner.davis@protonmail.com">
                conner.davis@protonmail.com
              </a>
            </td>
          </tr>
          <tr>
            <td>Github</td>
            <td>
              <a href="https://github.com/connergdavis">connergdavis</a>
            </td>
          </tr>
          <tr>
            <td>Linkedin</td>
            <td>
              <a href="https://www.linkedin.com/in/connergdavis/">
                connergdavis
              </a>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default IndexPage;
