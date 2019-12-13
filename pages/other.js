import Link from 'next/link'

export default () => <div>
  <style jsx>{`
  h1 {
    font-size: 68pt;
    font-weight: bold;
    text-align: right;
    letter-spacing: -8px;
    color: #f0f0f0;
    margin: -32px 0px;
  }
  p {
    margin: 0px;
    color: #666:
    font-size: 16px;
  }
  `}</style>
  <h1>Next.js</h1>
  <div>This is Other page.</div>
  <hr />
  <div>
    <Link href="/">
      <a>&lt;&lt;Back to Index page</a>
    </Link>
  </div>
</div>