import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { ReactComponent as Close } from "../assets/close.svg";
import { ReactComponent as AngleLeft } from "../assets/angleLeft.svg";
import { ReactComponent as X } from "../assets/X.svg";
import metabnb from "../assets/metabnb.jpg";
import lion from "../assets/lion.png";
import walletconnect from "../assets/walletConnect.png";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = ({ dimension }) => {
  const [navModal, setNavModal] = useState(false);
  const [connectWallet, setConnectWallet] = useState(false);

  const toggleConnectWallet = () => {
    setConnectWallet(!connectWallet)
  }

  const toggleMobileConnectWallet = () => {
    setConnectWallet(!connectWallet);
    setNavModal(!navModal);
  }

  const toggleNavModal = () => {
    setNavModal(!navModal);
  }
  return (
    <>
      <header className="w-[85vw] m-auto flex justify-between mt-10">
        <img src={metabnb} alt="Metabnb" className="w-36"/>
        {dimension.width >= 768 ?
          <>
            <nav className="self-center flex gap-5 text-base">
              <Link to="/">Home</Link>
              <Link to="/placetostay">Place to stay</Link>
              <a href="/">NFTs</a>
              <a href="/">Community</a>
            </nav>
            <button className="w-44 h-12 rounded-lg text-white bg-purple" onClick={toggleConnectWallet}>Connect Wallet</button>
          </> : <FontAwesomeIcon className="self-end" icon={faBars} onClick={toggleNavModal}/>}
      </header>
      {navModal ? 
        <div className="z-10 bg-black w-[100vw] h-[100vh] absolute top-0 pt-8">
          <div className="flex justify-around mb-8">
            <img src={metabnb} alt="Metabnb" className="w-36"/>
            <Close width="20px" height="20px" onClick={toggleNavModal}/>
          </div>
          <div className="text-white grid gap-4 text-center font-bold">
            <Link to="/">Home</Link>
            <Link to="/placetostay">Place to stay</Link>
            <a href="/">NFTs</a>
            <a href="/">Community</a>
          </div>
          <button className="w-44 h-12 rounded-lg text-white bg-purple ml-[30vw] sm:ml-[40vw] mt-8" onClick={toggleMobileConnectWallet}>Connect Wallet</button>
        </div> : null}
        {connectWallet ?
          <div className="z-10 bg-modalBg w-[100vw] h-[100vh] absolute top-0">
            <article className="w-[60vw] md:w-[50vw] bg-white h-72 m-auto mt-[20vw] rounded-md">
              <div className="w-[100%] m-auto h-[100%]">
                <div className="flex justify-between items-center h-12 border-b-2 px-4">
                  <strong>Connect Wallet</strong>
                  <X onClick={toggleConnectWallet}/>
                </div>
                <div className="mt-4 w-[90%] m-auto grid gap-4">
                  <span>Choose your preferred wallet:</span>
                  <div className="flex justify-between items-center rounded-md border px-4 h-14">
                    <div className="flex gap-3 items-center">
                      <img src={lion} alt="Lion coin" width="32px" height="32px" />
                      <strong>Metamask</strong>
                    </div>
                    <AngleLeft/>
                  </div>
                  <div className="flex justify-between items-center rounded-md border px-4 h-14">
                    <div className="flex gap-3 items-center">
                      <img src={walletconnect} alt="Wallet Connect coin" width="32px" height="32px" />
                      <strong>WalletConnect</strong>
                    </div>
                    <AngleLeft/>
                  </div>
                </div>
              </div>
            </article>
          </div> : null}
    </>
  )
}
export default Header;