const navigation = {
  about: [
    // { name: 'Marketing', href: '#' },
    // { name: 'Analytics', href: '#' },
    // { name: 'Commerce', href: '#' },
    // { name: 'Insights', href: '#' },
  ],
  indoor: [
    { name: 'Plants', href: '#' },
    { name: 'Sunlight', href: '#' },
    { name: 'Zones', href: '#' },
    // { name: 'API Status', href: '#' },
  ],
  outdoor: [
    // { name: 'About', href: '#' },
    // { name: 'Blog', href: '#' },
    // { name: 'Jobs', href: '#' },
    // { name: 'Press', href: '#' },
    // { name: 'Partners', href: '#' },
  ],
  home: [
    // { name: 'Claim', href: '#' },
    // { name: 'Privacy', href: '#' },
    // { name: 'Terms', href: '#' },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-white" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8 lg:py-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <img
            className="h-7"
            src="favicon.ico"
            alt="Company name"
          />
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">About</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.about.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Indoor</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.indoor.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Outdoor</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.outdoor.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-gray-900">Home</h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.home.map((item) => (
                    <li key={item.name}>
                      <a href={item.href} className="text-sm leading-6 text-gray-600 hover:text-gray-900">
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
