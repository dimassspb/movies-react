export function Footer() {
  return (
    <footer className="page-footer #1de9b6 teal accent-3">
      <div className="footer-copyright">
        <div className="container">
          © {new Date().getFullYear()} Copyright Text
          <a
            className="grey-text text-lighten-4 right"
            href="https://github.com/dimassspb/movies-react"
          >
            Repo
          </a>
        </div>
      </div>
    </footer>
  );
}
