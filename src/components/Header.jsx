import logo from '../assets/images/logo.png';

function Header() {

    return (
        <div className="flex flex-col text-center h-[15vh] items-center">
            <div className="py-5 font-bold h-full flex items-end">
                <p className="ps-[4.2rem] pe-2 text-4xl tracking-wider">PHILA</p>
                <img className="w-60 h-full" src={logo} />
                 <p className="ps-2 text-4xl tracking-wide">DELPHIA</p>
            </div>
        </div>
    )
}

export default Header;