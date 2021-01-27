import "./GettingStarted.css";

export const GettingStarted = () => {
  return (
    <article>
      <h1>Getting Started</h1>
      <p>
        This page is an overview of the React documentation and related
        resources.
      </p>
      <p>
        React is a JavaScript library for building user interfaces. Learn what
        React is all about on <a href="/">our homepage</a> or{" "}
        <a href="/">in the tutorial</a>.
      </p>
      <hr />
      <ul>
        <li>
          <a href="/">Try React</a>
        </li>
        <li>
          <a href="/">Learn React</a>
        </li>
        <li>
          <a href="/">Staying Informed</a>
        </li>
        <li>
          <a href="/">Versioned Documentation</a>
        </li>
        <li>
          <a href="/">Something Missing?</a>
        </li>
      </ul>
      <hr />
      <h2>Try React</h2>
      <p>
        React has been designed from the start for gradual adoption, and{" "}
        <span>you can use as little or as much React as you need.</span> Whether
        you want to get a taste of React, add some interactivity to a simple
        HTML page, or start a complex React-powered app, the links in this
        section will help you get started.
      </p>

      <h3>Online Playgrounds</h3>

      <p>
        If you’re interested in playing around with React, you can use an online
        code playground. Try a Hello World template on <a href="/">CodePen</a>,{" "}
        <a href="/">CodeSandbox</a>, or
        <a href="/">Stackblitz</a>.
      </p>

      <p>
        If you prefer to use your own text editor, you can also{" "}
        <a href="/">download this HTML file</a>, edit it, and open it from the
        local filesystem in your browser. It does a slow runtime code
        transformation, so we’d only recommend using this for simple demos.
      </p>

      <h3>Add React to a Website</h3>
      <p>
        You can add React to an HTML page in one minute. You can then either
        gradually expand its presence, or keep it contained to a few dynamic
        widgets.
      </p>
    </article>
  );
};
