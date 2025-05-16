export function Header({ c, b }) {
  return (
    <header>
      <h1>NeuroSnap</h1>
      <section className="score">
        <p className="current">
          Current Score: <span>{c}</span>
        </p>
        <p className="best">
          Best Score: <span>{b}</span>
        </p>
      </section>
    </header>
  );
}

export function Footer() {
  return (
    <footer>
      <p className="copyright">Copyright © Unpetrified 2025</p>
    </footer>
  );
}
