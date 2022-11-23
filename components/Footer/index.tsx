import { networks } from './data';

const Footer = () => {
  return (
    <footer className="pt-40">
      <div className="flex justify-evenly items-center bg-black sm:text-4xl text-3xl p-2">
        {networks.map(({ label, url, Icon }) => (
          <a
            key={label}
            href={url}
            target="_blank"
            rel="noreferrer"
            aria-label={label}
          >
            <div className="transition hover:bg-green-500 rounded py-2 px-3 cursor-pointer">
              <Icon />
            </div>
          </a>
        ))}
      </div>

      <div className="bg-black p-3 mt-40 text-center sm:text-base text-sm">
        <p>
          Copyright &copy; {new Date().getFullYear()} Jesús Valero | All Rights
          Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
