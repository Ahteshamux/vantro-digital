import { Link } from 'react-router-dom'
import { ArrowRight } from '../components/ui/Icons'

export default function NotFound() {
  return (
    <section className="py-24 md:py-36">
      <div className="container-page text-center">
        <div className="text-[13px] font-semibold uppercase tracking-[0.16em] text-warm-grey-light">
          404
        </div>
        <h1 className="mx-auto mt-5 max-w-lg text-[34px] font-bold leading-[1.1] tracking-[-0.02em] text-ink md:text-[44px]">
          That page doesn’t exist.
        </h1>
        <p className="mx-auto mt-4 max-w-sm text-[16px] leading-relaxed text-warm-grey">
          The link may be out of date. Everything worth seeing is one click away.
        </p>
        <Link
          to="/"
          className="group mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-[15px] font-semibold text-white hover:bg-black"
        >
          Back to home
          <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  )
}
