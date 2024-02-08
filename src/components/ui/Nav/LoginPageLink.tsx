import Link from "next/link";

export const LoginPageLink = () => {
  return (
    <Link
      href="https://instill.tech/login"
      className="instill-text-body flex text-instillGrey80 hover:text-instillBlue50"
    >
      <p className="my-auto">Log In</p>
    </Link>
  );
};
