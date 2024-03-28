import Link from "next/link";

export const LoginPageLink = () => {
  return (
    <div className="relative my-auto">
      <Link
        href="https://instill.tech/login"
        className="instill-text-body underline-animation flex text-instillGrey80 hover:text-instillBlue50"
      >
        <p className="my-auto">Log In</p>
      </Link>
    </div>
  );
};
