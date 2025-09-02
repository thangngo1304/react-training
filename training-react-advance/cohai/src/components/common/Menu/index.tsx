import { List, ListItem, VStack } from '@chakra-ui/react';

// Components
import { Navigation } from '@/components';

export type TMenuItem = {
  menuItemContent?: string;
  destination: string;
};

type TSidebarProps = {
  listItem: Array<TMenuItem>;
};

const MenuComponent = ({ listItem = [] }: TSidebarProps) => {
  return (
    <VStack w="100%">
      <List
        mt={2.5}
        display="flex"
        flexDir="column"
        alignItems="center"
        aria-label="list-icon"
        w="full"
        mb="24px"
        px="16px"
      >
        {listItem.map(({ destination, menuItemContent }) => {
          return (
            <ListItem key={menuItemContent} aria-label="item-icon">
              <Navigation destination={destination}>
                {menuItemContent}
              </Navigation>
            </ListItem>
          );
        })}
      </List>
    </VStack>
  );
};

export default MenuComponent;
