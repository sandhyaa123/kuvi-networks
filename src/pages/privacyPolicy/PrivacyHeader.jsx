
import logo from '../../assets/images/logo.jpg';


const PrivacyHeader = () => {
    return (
        <header className="mb-12">
        <div className="items-center justify-between flex">
          <div>
            <p className="text-3xl font-bold text-indigo-700">Privacy Policy</p>
            <p className="mt-2 text-gray-600">Kuvi Networks</p>
            <p className="text-sm text-gray-500">Last Updated: April 02, 2025</p>
          </div>
          <img alt="Kuvi Networks logo showing company name in a modern font with a network icon" src={logo} className="h-10 w-auto" />
        </div>
      </header>
    )
}

export default PrivacyHeader;