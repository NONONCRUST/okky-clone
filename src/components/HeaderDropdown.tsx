import { Menu, Transition } from "@headlessui/react"
import { signOut } from "next-auth/react"
import { Fragment } from "react"

const getMenuItemStyle = (active: boolean) => {
  return `group flex w-full items-center rounded-md px-10 py-2 text-sm ${
    active ? "text-blue-400" : "text-gray-900 dark:text-white"
  }`
}

const HeaderDropdown: React.FC = () => {
  return (
    <Transition
      as={Fragment}
      enter="transition ease-out duration-100"
      enterFrom="transform opacity-0 scale-95"
      enterTo="transform opacity-100 scale-100"
      leave="transition ease-in duration-75"
      leaveFrom="transform opacity-100 scale-100"
      leaveTo="transform opacity-0 scale-95"
    >
      <Menu.Items className="absolute right-0 w-56 mt-2 origin-top-right bg-white border divide-y divide-gray-100 rounded-md shadow-lg top-8 dark:border-gray-600 dark:divide-gray-600 ring-1 ring-black ring-opacity-5 focus:outline-none dark:bg-gray-800">
        <div className="px-1 py-1">
          <Menu.Item>
            {({ active }) => (
              <button className={getMenuItemStyle(active)}>
                {/* {active ? (
                  <EditActiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                ) : (
                  <EditInactiveIcon
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                  />
                )} */}
                내 프로필
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button className={getMenuItemStyle(active)}>
                {/* {active ? (
                  <DuplicateActiveIcon
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                  />
                ) : (
                  <DuplicateInactiveIcon
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                  />
                )} */}
                내 계정
              </button>
            )}
          </Menu.Item>
          <Menu.Item>
            {({ active }) => (
              <button className={getMenuItemStyle(active)}>
                {/* {active ? (
                  <ArchiveActiveIcon
                  className="w-5 h-5 mr-2"
                  aria-hidden="true"
                  />
                  ) : (
                    <ArchiveInactiveIcon
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                    />
                  )} */}
                활동 내역
              </button>
            )}
          </Menu.Item>
        </div>
        <div className="px-1 py-1">
          <Menu.Item>
            {({ active }) => (
              <button
                className={getMenuItemStyle(active)}
                onClick={() => signOut()}
              >
                {/* {active ? (
                  <MoveActiveIcon className="w-5 h-5 mr-2" aria-hidden="true" />
                ) : (
                  <MoveInactiveIcon
                    className="w-5 h-5 mr-2"
                    aria-hidden="true"
                  />
                )} */}
                로그아웃
              </button>
            )}
          </Menu.Item>
        </div>
      </Menu.Items>
    </Transition>
  )
}

export default HeaderDropdown
