import 'tailwindcss/tailwind.css';
import ContextWrapper from '../contexts/ContextWrapper';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

// export const decorators = [
//   (Story) => (
//     <ContextWrapper>
//       <Story />
//     </ContextWrapper>
//   ),
// ];