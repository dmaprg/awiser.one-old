import { stores } from '../data/site'

export function Stores() {
  return (
    <section id="stores" className="stores">
      <div className="wrap">
        <h2>Available from these stores:</h2>
        <div className="store-grid">
          {stores.map((store) => (
            <article key={store.name} className="store-card">
              <h3>{store.name}</h3>
              {store.lines.map((line) => (
                <p key={line}>{line}</p>
              ))}
              {store.image ? (
                <img src={store.image} alt={store.imageAlt ?? store.name} />
              ) : null}
              {store.download ? (
                <a className="text-link" href={store.download.href} download>
                  {store.download.label}
                </a>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
