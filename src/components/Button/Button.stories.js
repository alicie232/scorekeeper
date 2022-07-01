import Button from "./Button";

export default {
  title: "Button",
  component: Button,
};

export const Default = () => <Button>End game</Button>;

export const RedButton = () => <Button background="red">Danger</Button>;
