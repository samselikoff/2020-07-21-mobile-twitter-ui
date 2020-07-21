import "tailwindcss/tailwind.css";
import { Link } from "../components/Link";
import "../server";

function MyApp({ Component, pageProps }) {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen mx-auto text-base text-gray-900 bg-cool-gray-200 xs:py-8">
      <div
        className="relative flex flex-col flex-1 w-full overflow-hidden bg-white shadow xs:max-w-sm"
        style={{ maxHeight: 812 }}
      >
        <header
          className={`flex items-center px-4 bg-white h-13 border-b ${
            Component.headerBorder ? "border-gray-300" : "border-transparent"
          }`}
        >
          <img
            className="rounded-full w-7 h-7"
            src="https://pbs.twimg.com/profile_images/1282391598878392320/sFA_RlbT_400x400.jpg"
            alt=""
          />
          <p className="pl-px text-lg font-extrabold ml-7">
            {Component.headerTitle}
          </p>
        </header>

        <main className="flex-1 overflow-scroll">
          <Component {...pageProps} />
        </main>

        <footer className="flex items-center justify-between bg-white border-t border-gray-200">
          <FooterLink
            href="/"
            activeIcon={<HomeIcon className="w-7 h-7" />}
            inactiveIcon={<HomeIconEmpty className="w-7 h-7" />}
          />

          <FooterLink
            href="/explore"
            activeIcon={<SearchIcon className="w-7 h-7" />}
            inactiveIcon={<SearchIconEmpty className="w-7 h-7" />}
          />

          <FooterLink
            href="/notifications"
            activeIcon={<BellIcon className="w-7 h-7" />}
            inactiveIcon={<BellIconEmpty className="w-7 h-7" />}
          />

          <FooterLink
            href="/messages"
            activeIcon={<MailboxIcon className="w-7 h-7" />}
            inactiveIcon={<MailboxIconEmpty className="w-7 h-7" />}
          />
        </footer>
      </div>
    </div>
  );
}

function FooterLink({ href, children, activeIcon, inactiveIcon }) {
  return (
    <Link
      href={href}
      className="flex justify-center w-1/4 py-3"
      activeClassName="text-blue-500"
      inactiveClassName="text-gray-500"
    >
      {({ isActive }) => (
        <span className="flex justify-center w-1/4">
          {isActive ? activeIcon : inactiveIcon}
        </span>
      )}
    </Link>
  );
}

function HomeIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`fill-current stroke-current stroke-0 ${className}`}
    >
      <g>
        <path d="M22.58 7.35L12.475 1.897c-.297-.16-.654-.16-.95 0L1.425 7.35c-.486.264-.667.87-.405 1.356.18.335.525.525.88.525.16 0 .324-.038.475-.12l.734-.396 1.59 11.25c.216 1.214 1.31 2.062 2.66 2.062h9.282c1.35 0 2.444-.848 2.662-2.088l1.588-11.225.737.398c.485.263 1.092.082 1.354-.404.263-.486.08-1.093-.404-1.355zM12 15.435c-1.795 0-3.25-1.455-3.25-3.25s1.455-3.25 3.25-3.25 3.25 1.455 3.25 3.25-1.455 3.25-3.25 3.25z"></path>
      </g>
    </svg>
  );
}
function HomeIconEmpty({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`fill-current stroke-current stroke-0 ${className}`}
    >
      <g>
        <path d="M22.46 7.57L12.357 2.115c-.223-.12-.49-.12-.713 0L1.543 7.57c-.364.197-.5.652-.303 1.017.135.25.394.393.66.393.12 0 .243-.03.356-.09l.815-.44L4.7 19.963c.214 1.215 1.308 2.062 2.658 2.062h9.282c1.352 0 2.445-.848 2.663-2.087l1.626-11.49.818.442c.364.193.82.06 1.017-.304.196-.363.06-.818-.304-1.016zm-4.638 12.133c-.107.606-.703.822-1.18.822H7.36c-.48 0-1.075-.216-1.178-.798L4.48 7.69 12 3.628l7.522 4.06-1.7 12.015z"></path>
        <path d="M8.22 12.184c0 2.084 1.695 3.78 3.78 3.78s3.78-1.696 3.78-3.78-1.695-3.78-3.78-3.78-3.78 1.696-3.78 3.78zm6.06 0c0 1.258-1.022 2.28-2.28 2.28s-2.28-1.022-2.28-2.28 1.022-2.28 2.28-2.28 2.28 1.022 2.28 2.28z"></path>
      </g>
    </svg>
  );
}
function SearchIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`fill-current stroke-current stroke-0 ${className}`}
    >
      <g>
        <path d="M22.06 19.94l-3.73-3.73C19.38 14.737 20 12.942 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c1.943 0 3.738-.622 5.21-1.67l3.73 3.73c.292.294.676.44 1.06.44s.768-.146 1.06-.44c.586-.585.586-1.535 0-2.12zM11 17c-3.308 0-6-2.692-6-6s2.692-6 6-6 6 2.692 6 6-2.692 6-6 6z"></path>
      </g>
    </svg>
  );
}
function SearchIconEmpty({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`fill-current stroke-current stroke-0 ${className}`}
    >
      <g>
        <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
      </g>
    </svg>
  );
}
function BellIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`fill-current stroke-current stroke-0 ${className}`}
    >
      <g>
        <path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.533-.812-4.782-2.347-6.334-1.375-1.393-3.237-2.164-5.242-2.172h-.013c-2.004.008-3.866.78-5.242 2.172-1.534 1.553-2.367 3.802-2.346 6.333.037 4.332-2.02 5.967-2.102 6.03-.26.194-.366.53-.265.838s.39.515.713.515h4.494c.1 2.544 2.188 4.587 4.756 4.587s4.655-2.043 4.756-4.587h4.494c.324 0 .61-.208.712-.515s-.005-.644-.265-.837zM12 20.408c-1.466 0-2.657-1.147-2.756-2.588h5.512c-.1 1.44-1.29 2.587-2.756 2.587z"></path>
      </g>
    </svg>
  );
}
function BellIconEmpty({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`fill-current stroke-current stroke-0 ${className}`}
    >
      <g>
        <path d="M21.697 16.468c-.02-.016-2.14-1.64-2.103-6.03.02-2.532-.812-4.782-2.347-6.335C15.872 2.71 14.01 1.94 12.005 1.93h-.013c-2.004.01-3.866.78-5.242 2.174-1.534 1.553-2.368 3.802-2.346 6.334.037 4.33-2.02 5.967-2.102 6.03-.26.193-.366.53-.265.838.102.308.39.515.712.515h4.92c.102 2.31 1.997 4.16 4.33 4.16s4.226-1.85 4.327-4.16h4.922c.322 0 .61-.206.71-.514.103-.307-.003-.645-.263-.838zM12 20.478c-1.505 0-2.73-1.177-2.828-2.658h5.656c-.1 1.48-1.323 2.66-2.828 2.66zM4.38 16.32c.74-1.132 1.548-3.028 1.524-5.896-.018-2.16.644-3.982 1.913-5.267C8.91 4.05 10.397 3.437 12 3.43c1.603.008 3.087.62 4.18 1.728 1.27 1.285 1.933 3.106 1.915 5.267-.024 2.868.785 4.765 1.525 5.896H4.38z"></path>
      </g>
    </svg>
  );
}
function MailboxIcon({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`fill-current stroke-current stroke-0 ${className}`}
    >
      <g>
        <path d="M11.55 12.082c.273.182.627.182.9 0L22 5.716V5.5c0-1.24-1.01-2.25-2.25-2.25H4.25C3.01 3.25 2 4.26 2 5.5v.197l9.55 6.385z"></path>
        <path d="M13.26 13.295c-.383.255-.82.382-1.26.382s-.877-.127-1.26-.383L2 7.452v11.67c0 1.24 1.01 2.25 2.25 2.25h15.5c1.24 0 2.25-1.01 2.25-2.25V7.47l-8.74 5.823z"></path>
      </g>
    </svg>
  );
}
function MailboxIconEmpty({ className }) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={`fill-current stroke-current stroke-0 ${className}`}
    >
      <g>
        <path d="M19.25 3.018H4.75C3.233 3.018 2 4.252 2 5.77v12.495c0 1.518 1.233 2.753 2.75 2.753h14.5c1.517 0 2.75-1.235 2.75-2.753V5.77c0-1.518-1.233-2.752-2.75-2.752zm-14.5 1.5h14.5c.69 0 1.25.56 1.25 1.25v.714l-8.05 5.367c-.273.18-.626.182-.9-.002L3.5 6.482v-.714c0-.69.56-1.25 1.25-1.25zm14.5 14.998H4.75c-.69 0-1.25-.56-1.25-1.25V8.24l7.24 4.83c.383.256.822.384 1.26.384.44 0 .877-.128 1.26-.383l7.24-4.83v10.022c0 .69-.56 1.25-1.25 1.25z"></path>
      </g>
    </svg>
  );
}

export default MyApp;
