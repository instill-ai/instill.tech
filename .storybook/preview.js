import 'tailwindcss/tailwind.css';

import * as NextImage from 'next/image';

const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, 'default', {
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
    presetColors: [
      {
        color: "#000000",
        title: "black"
      }
    ]
  },
}

// export const decorators = [
//   (Story) => (
//     <ContextWrapper>
//       <Story />
//     </ContextWrapper>
//   ),
// ];