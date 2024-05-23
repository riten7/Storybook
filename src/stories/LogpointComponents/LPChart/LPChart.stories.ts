import type { Meta, StoryObj } from "@storybook/react";
import LPChart from ".";
import { layoutData } from "../../Library/GridLayout/json/data";

const meta = {
  title: "Composite/Components/LPChart",
  component: LPChart,
  parameters: {
    layout: "",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof LPChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: "LPChart",
    gridProps: {
      layouts: { lg: layoutData }
    },
  },
};
