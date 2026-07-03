export default function Contact() {

  return (
    <section id="contact" data-reveal>
      <h1>Contact</h1>
      <div className="contact-list" data-reveal="stagger">
        <a className="contact-row" href="mailto:2yeongheun@gmail.com">
          <span className="contact-label">Email</span>
          <span className="contact-val">2yeongheun@gmail.com ↗</span>
        </a>
        <a className="contact-row" href="https://github.com/eongeung" target="_blank" rel="noreferrer">
          <span className="contact-label">GitHub</span>
          <span className="contact-val">github.com/eongeung ↗</span>
        </a>
        <a className="contact-row" href="https://velog.io/@0nee/posts" target="_blank" rel="noreferrer">
          <span className="contact-label">Blog</span>
          <span className="contact-val">velog.io/@0nee ↗</span>
        </a>
      </div>
    </section>
  );
}
