import { Link, useParams } from 'react-router-dom'
import { forumUrl, getModel } from '../data/site'
import { usePageMeta } from '../hooks/usePageMeta'

export function ModelDetail() {
  const { slug } = useParams()
  const model = getModel(slug)

  usePageMeta(
    model
      ? `${model.name} | AWiser.One`
      : 'Model not found | AWiser.One',
    model ? `${model.lead} ${model.body}` : undefined,
  )

  if (!model) {
    return (
      <main className="detail wrap">
        <h1>This model is not on the site.</h1>
        <Link className="text-link" to="/#models">
          Back to Thinking Models
        </Link>
      </main>
    )
  }

  return (
    <main className="detail wrap" data-slug={model.slug}>
      <p className="model-kicker">Thinking Model</p>
      <h1>{model.name}</h1>
      <img src={model.image} alt={model.imageAlt} />
      <p className="model-lead">{model.lead}</p>
      <p>{model.body}</p>
      <div className="detail-actions">
        <a className="btn" href={forumUrl}>
          Main Post in Forum
        </a>
        <Link className="text-link" to="/#models">
          Back to Thinking Models
        </Link>
      </div>
    </main>
  )
}
