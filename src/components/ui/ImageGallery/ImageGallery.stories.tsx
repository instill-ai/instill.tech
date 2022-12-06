import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ImageGallery } from "./ImageGallery";

export default {
  title: "Components/ImageGallery",
  component: ImageGallery,
} as ComponentMeta<typeof ImageGallery>;

const Template: ComponentStory<typeof ImageGallery> = (args) => (
  <ImageGallery {...args} />
);

export const Playground: ComponentStory<typeof ImageGallery> = Template.bind(
  {}
);

Playground.args = {
  images: [
    {
      alt: "test-1",
      src: "/docs-assets/tutorials/add-a-yolov7-model.png",
    },
    {
      alt: "test-2",
      src: "/docs-assets/tutorials/add-a-destination-postgres.png",
    },
  ],
};
