import Image from "next/image";
import Link from "next/link";

export const Logo = () => {
  return (
    <Link href="/">
      <Image width={150} height={38} alt="logo" src="/logo.svg" />
    </Link>
  );
};
