import {ReactComponent as FooterLogo } from "../assets/metabnbFooter.svg";
import {ReactComponent as FaceBook } from "../assets/fb.svg";
import {ReactComponent as Instagram } from "../assets/Ig.svg";
import {ReactComponent as Twitter } from "../assets/twitter.svg";
import {ReactComponent as Copyright } from "../assets/copyright.svg";

const Footer = () => {
  return (
    <footer className="bg-extra-black min-h-80 pt-16 pb-10 text-white">
      <div className="grid justify-center gap-6 md:flex md:justify-between w-[85vw] m-auto">
        <div className="grid gap-4">
          <FooterLogo/>
          <div className="flex justify-center gap-4 md:justify-start">
            <FaceBook/>
            <Instagram/>
            <Twitter/>
          </div>
          <div className="flex justify-center gap-2 md:justify-start">
            <Copyright/>
            <p>2022 Metabnb</p>
          </div>
        </div>
        <div className="grid gap-2 text-center">
          <span className="font-bold text-lg">Community</span>
          <p>NFT</p>
          <p>Tokens</p>
          <p>Landlords</p>
          <p>Discord</p>
        </div>
        <div className="grid gap-2 text-center">
          <span className="font-bold text-lg">Places</span>
          <p>Castle</p>
          <p>Farm</p>
          <p>Beach</p>
          <p>Learn more</p>
        </div>
        <div className="grid gap-2 text-center">
          <span className="font-bold text-lg">About us</span>
          <p>Roadmap</p>
          <p>Creators</p>
          <p>Careers</p>
          <p>Contact us</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;