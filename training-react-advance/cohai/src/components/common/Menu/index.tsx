import { Heading, List, ListItem, VStack } from '@chakra-ui/react';
import { ReactElement } from 'react';

// Components
import { Navigation } from '@/components';

// Constants

export type TMenuItem = {
  id: number;
  leftIcon?: () => ReactElement;
  menuItemContent?: string;
  destination: string;
};

type TSidebarProps = {
  listItem: Array<TMenuItem>;
  title?: string;
};

const MenuComponent = ({ title, listItem = [] }: TSidebarProps) => {
  return (
    <VStack w="100%">
      {title && (
        <Heading as="h2" w="full" fontSize="sm" mb="10px" px="22px">
          {title}
        </Heading>
      )}

      <List mt={2.5} aria-label="list-icon" w="full" mb="24px" px="16px">
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
