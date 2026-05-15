const LICENSES = ['SQLD', '리눅스마스터 2급', '네트워크 관리사 2급', '운전면허 2종 보통', 'GTQ 1급'];

export default function License() {
  return (
    <section id="license">
      <div className="license-section">
        <h1>License</h1>
        <ul className="license-list">
          {LICENSES.map(l => (
            <li key={l}>
              <span className="license-check">✓</span>
              {l}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
