import { Fragment, useContext } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { useNavigate } from 'react-router-dom';
import { CityContext } from './CityContext';
import '../CSS/dropdown.css'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Cityselector() {
  const navigate = useNavigate();
  const { setSelectedCity } = useContext(CityContext);
  const cities = [
    'New York, NY', 
    'Austin, TX', 
    'Chicago, IL',
    'San Francisco, CA',
    'Seattle, WA',
    'Los Angeles, CA',
    'Boston, MA',
    'Portland, OR',
    'Denver, CO',
    'Dallas, TX',
  ]

  const handleSelect = (city) => {
    setSelectedCity(city);
    navigate('/locations', {state: {selectedCity: city}});
    console.log(city);
  }

  return (
    <div className='dropdown'>
      <Menu as="div" className="relative inline-block text-left">
        <div className='dropdown'>
          <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
            Select Your City
            <ChevronDownIcon className="-mr-1 h-5 w-5 text-green-500" aria-hidden="true" />
          </Menu.Button>
        </div>

        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg">
            {cities.map(city => (
              <Menu.Item key={city}>
                {({ active }) => (
                  <a
                    href="#"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block px-4 py-2 text-sm'
                    )}
                    onClick={() => handleSelect(city)}
                  >
                    {city}
                  </a>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}