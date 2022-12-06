import { ComponentStory, ComponentMeta } from "@storybook/react";
import { MarkdownImgGallery } from "./MarkdownImgGallery";

export default {
  title: "Components/MarkdownImgGallery",
  component: MarkdownImgGallery,
} as ComponentMeta<typeof MarkdownImgGallery>;

const Template: ComponentStory<typeof MarkdownImgGallery> = (args) => (
  <MarkdownImgGallery {...args} />
);

export const Playground: ComponentStory<typeof MarkdownImgGallery> =
  Template.bind({});

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
