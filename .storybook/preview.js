import "tailwindcss/tailwind.css";
import "../styles/global.css"
import * as NextImage from "next/image";
import { RouterContext } from "next/dist/shared/lib/router-context";

const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    isReady: true,
    Provider: RouterContext.Provider,
  },
};

// export const decorators = [
//   (Story) => (
//     <ContextWrapper>
//       <Story />
//     </ContextWrapper>
//   ),
// ];
