import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const Mattpayne1Page = () => {
  return (
    <>
      <MetaTags title="Mattpayne1" description="Mattpayne1 page" />

      <h1>Mattpayne1Page: Hello world!</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/Mattpayne1Page/Mattpayne1Page.tsx</code>
      </p>
      <p>
        My default route is named <code>mattpayne1</code>, link to me with `
        <Link to={routes.mattpayne1()}>Mattpayne1</Link>`
      </p>
    </>
  )
}

export default Mattpayne1Page
