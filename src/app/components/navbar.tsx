import Image from 'next/image';
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Button,
  Link
} from '@nextui-org/react';

export default function NavBar() {
  return (
    <Navbar position="static" className="h-24">
      <NavbarBrand>
        <Image
          src="/FULL_LOGO_COLOR.png"
          width={315}
          height={87}
          alt="Learnwell logo"
        />
      </NavbarBrand>
      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Videos
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Create
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Comment Hub
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
          <Link href="#">Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color="primary" href="#" variant="flat">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
}
