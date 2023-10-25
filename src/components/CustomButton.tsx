import { Button } from "@chakra-ui/react";

type CustomButtonProps = {
  text: string;
  onClick: () => void;
};

export const CustomButton = ({ text, onClick }: CustomButtonProps) => {
  return (
    <Button
      onClick={onClick}
      colorScheme="teal"
      size="sm"
      width="100%"
      marginTop="5px"
    >
      {text}
    </Button>
  );
};
