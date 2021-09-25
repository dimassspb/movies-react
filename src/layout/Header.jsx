export function Header() {
return (
  <nav className="#1de9b6 teal accent-3">
    <div className="nav-wrapper">
      <a
        href="https://dimassspb.github.io/movies-react/"
        className="brand-logo"
      >
        React movies
      </a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li>
          <a href="https://github.com/dimassspb/movies-react">Repo</a>
        </li>
      </ul>
    </div>
  </nav>
);
};