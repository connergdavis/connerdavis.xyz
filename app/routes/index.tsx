import { Link } from "remix";

export default function Index(): JSX.Element {
  return (
    <section className="p-8">
      <header>
        <h1>Hi there!</h1>
      </header>
      <p className="font-bold">
        My name is Conner Davis, and I'm a full stack software engineer.
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
      <p></p>
      <section className="py-8">
        <header>
          <h2>What I'm working on right now</h2>
        </header>
        <ul>
          <li>
            <a href="https://pacresmortgage590360194.netlify.app">
              Pacific Residential Mortgage website
            </a>
          </li>
          <li>
            <a href="https://conner.is">This website</a>
          </li>
        </ul>
      </section>
      <section>
        <header>
          <h2>What I've delivered</h2>
        </header>
        <ul>
          <li>
            <a href="https://scu.edu">Santa Clara University website</a>
          </li>
          <li>
            <a href="https://brand.scu.edu">
              Santa Clara University design system
            </a>
          </li>
          <li>
            <a href="https://saclawyers.com">
              Law Office of Daniel A. Street website
            </a>
          </li>
        </ul>
      </section>
      <section className="py-8">
        <header>
          <h2>Check out my resume</h2>
        </header>
        <p>
          <Link to="/resume">In your browser</Link>
        </p>
        <p>
          <Link to="resume.pdf">As a PDF</Link>
        </p>
      </section>
      <section>
        <header>
          <h2>Get in contact</h2>
        </header>
        <table>
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
        </table>
      </section>
    </section>
  );
}
