import type { Meta, StoryObj } from "@storybook/react";
import { layoutData } from "../../Library/GridLayout/json/data";
import LPWidget from ".";

const meta = {
  title: "Composite/Components/LPWidget",
  component: LPWidget,
  parameters: {
    layout: "",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LPWidget>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Widget: Story = {
  args: {
    label: "LPWidget",
    gridProps: {
      layouts: { lg: layoutData }
    },
  },
};
