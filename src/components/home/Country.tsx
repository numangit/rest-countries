import { CountryPropsType } from "../../interfaces/interfaces";


export default function Country({ country }: CountryPropsType) {
  const { name, flags, capital, region } = country;
  return (
    <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg dark:bg-gray-800">
      <img
        className="object-cover w-full h-56"
        src={flags.png}
        alt="avatar"
      />
      <div className="py-5 text-center">
        <a
          href="#"
          className="block text-xl font-bold text-gray-800 dark:text-white"
          tabIndex={0}
          role="link"
        >
          {name.common}
        </a>
        <p className="text-sm text-gray-700 text-left ml-3 dark:text-gray-200">
          Capital: {capital}
        </p>
        <p className="text-sm text-gray-700 text-left ml-3 dark:text-gray-200">
          region: {region}
        </p>
      </div>
    </div>
  )
}
