import { memo, useCallback } from 'react';
import { Box, Flex } from '@chakra-ui/react';
import isEqual from 'react-fast-compare';
import { Controller, useForm } from 'react-hook-form';
import { CloseIcon } from '@chakra-ui/icons';

// Component
import Navbar from './NavbarItem';
import { NotificationIcon, SearchIcon, SettingIcon } from '@/icons';
import { InputField } from '@/components/common';

type THeaderProps = {
  path?: string;
  name?: string;
  searchValue?: string;
  colorFill?: string;
  colorIcon?: string;
  isProfile?: boolean;
  onSearch?: (value: string) => void;
};

export type TSearchValue = {
  search: string;
};

const Header = ({
  path,
  name,
  searchValue,
  colorFill,
  colorIcon,
  isProfile,
  onSearch,
}: THeaderProps) => {
  const { control, resetField } = useForm<TSearchValue>({
    defaultValues: {
      search: searchValue,
    },
  });

  const handleResetValue = useCallback(() => {
    onSearch && onSearch('');
    resetField('search');
  }, [onSearch, resetField]);

  return (
    <Flex
      w="100%"
      p="24px"
      flexDirection={{ base: 'column', md: 'row' }}
      alignItems={{ base: 'flex-start', md: 'center' }}
      justifyContent="space-between"
      borderRadius="lg"
    >
      <Box mb={{ base: '10px', md: 'unset' }}>
        <Navbar path={path} name={name} colorFill={colorFill} />
      </Box>
      <Flex
        w={{ base: '100%', md: 'unset' }}
        flexDirection="row"
        alignItems="center"
        justifyContent="space-between"
      >
        <Box mr="18px">
          <Controller
            control={control}
            name="search"
            render={({ field: { value, onChange } }) => (
              <InputField
                placeholder="Search Author"
                value={value}
                onChange={(value: string) => {
                  onChange(value);
                  onSearch && onSearch(value);
                }}
                leftIcon={<SearchIcon />}
                rightIcon={value && <CloseIcon as='button' onClick={handleResetValue} />}
                background="background.100"
                isDisabled={isProfile}
              />
            )}
          />
        </Box>
        <Box>
          <Flex gap="17px">
            <SettingIcon color={colorIcon} />
            <NotificationIcon color={colorIcon} />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
};

export default memo(Header, isEqual);
