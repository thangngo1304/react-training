import { Heading, List, ListItem, VStack } from '@chakra-ui/react';
import { Fragment, MouseEvent, ReactElement, useCallback } from 'react';

// Components
import { Navigation } from '@/components';

// Constants
import { ROUTES } from '@/constants';

export type TMenuItem = {
  id: number;
  leftIcon?: () => ReactElement;
  menuItemContent?: string;
  destination: string;
};

type TSidebarProps = {
  listItem: Array<TMenuItem>;
  title?: string;
  onSignOut?: () => void;
};

const MenuComponent = ({ title, listItem = [], onSignOut }: TSidebarProps) => {
  const handleSignOut = useCallback(
    (e: MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault();
      onSignOut && onSignOut();
    },
    [onSignOut],
  );
  return (
    <VStack w="100%">
      {title && (
        <Heading as="h2" w="full" fontSize="sm" mb="10px" px="22px">
          {title}
        </Heading>
      )}

      <List mt={2.5} aria-label="list-icon" w="full" mb="24px" px="16px">
        {listItem.map(({ leftIcon, destination, menuItemContent }) => {
          const LeftIconComponent = leftIcon || Fragment;
          const handleClick = (e: MouseEvent<HTMLAnchorElement>) =>
            destination === ROUTES.SIGN_OUT && handleSignOut(e);

          return (
            <ListItem key={menuItemContent} aria-label="item-icon">
              <Navigation
                destination={destination}
                leftIcon={<LeftIconComponent />}
                onClick={handleClick}
              >
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
