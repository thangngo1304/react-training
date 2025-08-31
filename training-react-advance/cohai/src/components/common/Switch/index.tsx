import { FormControl, FormLabel, Switch, SwitchProps } from '@chakra-ui/react';

type TSwitchComponent = SwitchProps & {
  title: string;
  fontSize?: string;
  color?: string;
};

const SwitchComponent = ({
  title,
  fontSize,
  color = 'text.200',
  ...rest
}: TSwitchComponent) => (
  <FormControl display="flex" alignItems="center">
    <Switch id="remember-me" {...rest} />
    <FormLabel
      htmlFor="remember-me"
      ml="10px"
      mb="0"
      color={color}
      fontSize={fontSize}
    >
      {title}
    </FormLabel>
  </FormControl>
);

export default SwitchComponent;
