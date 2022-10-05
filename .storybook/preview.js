import "tailwindcss/tailwind.css";
import "../src/styles/global.css";
import NextImage from "next/future/image";
import { RouterContext } from "next/dist/shared/lib/router-context";

// Workaround for next/future/image
Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => {
    const { fill, ...restProps } = props;

    return (
      <img
        {...restProps}
        style={
          fill
            ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                inset: 0,
                color: "transparent",
              }
            : undefined
        }
      />
    );
  },
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
