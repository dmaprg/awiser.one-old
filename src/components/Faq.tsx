import { useState } from 'react'
import { faqs, forumUrl } from '../data/site'

export function Faq() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <section id="faq" className="faq">
      <div className="faq-panel">
        <h2>Frequently Asked Questions</h2>
        <p>
          Hello, here you'll find answers to commonly asked questions about our website's digital
          products. Especially books and courses about thinking, behaving, and speech models
          designed to help you thrive. Explore the questions below to gain insights on how our
          innovative tools can empower you to enhance your mindset, improve your behavior, and
          optimize your communication skills. If you can't find the information here, you can either
          search the <a href={forumUrl}>Forum</a> page (see the button aobve) or ask any question in
          General section with a new post, or feel free to reach out to our support team for further
          assistance.
        </p>
        <div className="accordion">
          {faqs.map((item, index) => {
            const open = openIndex === index
            const panelId = `faq-panel-${index}`
            return (
              <article key={item.question}>
                <h3>
                  <button
                    type="button"
                    aria-expanded={open}
                    aria-controls={panelId}
                    onClick={() => setOpenIndex(open ? -1 : index)}
                  >
                    {item.question}
                  </button>
                </h3>
                {open ? <p id={panelId}>{item.answer}</p> : null}
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}
