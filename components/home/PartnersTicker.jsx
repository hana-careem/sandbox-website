'use client'

// PartnersTicker.jsx
// The cross-fading partners band (fade + slight blur/rise). With Sandbox's three
// backing bodies it shows all three at once and gently cross-fades on a shared beat,
// rotating their order so the row keeps breathing without ever dropping a name.
// Real logos aren't finalised yet, so each slot renders a greyscale wordmark by
// default; add `logo` to a partner to swap in an <img> from assets/ (import it,
// never hotlink).

import { useState, useEffect } from 'react'

const DEFAULT_PARTNERS = [
  { name: 'APIIT Sri Lanka' },
  { name: 'APIIT Entrepreneurship Club' },
  { name: 'Ministry of Education' },
]

const INTERVAL = 2600 // ms between each cross-fade beat

function Wordmark({ partner }) {
  return partner.logo ? (
    <img src={partner.logo} alt={partner.name} className="h-6 w-auto opacity-70 grayscale" />
  ) : (
    <span className="whitespace-nowrap font-[600] tracking-tight text-white/45">
      {partner.name}
    </span>
  )
}

export default function PartnersTicker({
  partners = DEFAULT_PARTNERS,
  caption = 'Backed by & in partnership with',
}) {
  const n = partners.length
  const [base, setBase] = useState(0)
  const [shown, setShown] = useState(true)

  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (reduce || n <= 1) return

    let swap
    const id = setInterval(() => {
      setShown(false)
      swap = setTimeout(() => {
        setBase((b) => (b + 1) % n)
        setShown(true)
      }, 450)
    }, INTERVAL)

    return () => {
      clearInterval(id)
      clearTimeout(swap)
    }
  }, [n])

  return (
    <section className="w-full py-10" aria-label="Partners">
      <p className="mb-5 text-center text-sm text-white/50">{caption}</p>
      <div className="mx-auto flex max-w-3xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-6">
        {partners.map((_, s) => {
          const partner = partners[(base + s) % n]
          return (
            <div key={s} className="flex h-7 items-center justify-center">
              <div
                className={
                  'flex items-center justify-center transition-all duration-500 ' +
                  (shown
                    ? 'translate-y-0 opacity-100 blur-0'
                    : 'translate-y-1.5 opacity-0 blur-[3px]')
                }
              >
                <Wordmark partner={partner} />
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}
