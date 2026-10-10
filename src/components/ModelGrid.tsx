import { Link } from 'react-router-dom'
import { forumUrl, models } from '../data/site'

export function ModelGrid() {
  return (
    <section id="models" className="models">
      <div className="wrap">
        <h2>Thinking Models</h2>
        <div className="model-grid">
          {models.map((model) => (
            <article key={model.slug} className="model-card" data-slug={model.slug}>
              <p className="model-kicker">Thinking Model</p>
              <img src={model.image} alt={model.imageAlt} />
              <h3>{model.name}</h3>
              <p className="model-lead">{model.lead}</p>
              <p>{model.body}</p>
              <Link className="text-link" to={`/models/${model.slug}`}>
                Read More
              </Link>
              <a className="model-forum" href={forumUrl}>
                Main Post in Forum
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
