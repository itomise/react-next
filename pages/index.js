import Link from 'next/link'
import style from '../static/Style'

export default () => <div>
  {style}
  <h1>Next.js</h1>
  <div>Welcome to next.js!</div>
  <hr />
  <div>
    <Link href="/other">
      <button>Go to Other page &gt;&gt;</button>
    </Link>
  </div>
</div>