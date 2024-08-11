
import { Footer, FooterCopyright, FooterLink, FooterLinkGroup } from "flowbite-react";

 function FooterSection() {
  return (
    <Footer className="bg-gray-300 mb-4 mt-4" container>
      <FooterCopyright href="#" by="Flowbite™" year={2022} />
      <FooterLinkGroup>
        <FooterLink href="#">About</FooterLink>
        <FooterLink href="#">Privacy Policy</FooterLink>
        <FooterLink href="#">Licensing</FooterLink>
        <FooterLink href="#">Contact</FooterLink>
      </FooterLinkGroup>
    </Footer>
  );
}
export default FooterSection

