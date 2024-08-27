'use client';

import { memo, useCallback, useMemo, useState } from 'react';
import isEqual from 'react-fast-compare';
import {
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Td,
  useDisclosure,
} from '@chakra-ui/react';
import { EditIcon, ViewIcon } from '@chakra-ui/icons';

// Components
import { Dot } from '@/icons';
import { AuthorForm, Modal, ProjectDetail, ProjectForm } from '../..';

// Types
import { TRecordAuthor, TRecordProject } from '@/types';

type TActionCellComponent = {
  data?: TRecordAuthor;
  dataProject?: TRecordProject;
  isAuthor?: boolean;
  isOpenOption?: boolean;
  onUpdateAuthor?: (author: TRecordAuthor) => void;
  onUpdateProject?: (project: TRecordProject) => void;
};

const ActionCellComponent = ({
  data,
  dataProject,
  isAuthor,
  isOpenOption,
  onUpdateAuthor,
  onUpdateProject
}: TActionCellComponent) => {
  const [isView, setIsView] = useState(false);
  const { isOpen, onToggle } = useDisclosure()

  const { fields } = dataProject || {}
  const {
    _id,
    projectName,
    budget,
    image,
    status,
    completion,
    description
  } = fields || {}

  const handleToggleModalProject = useCallback((isViewModal: boolean) => () => {
    onToggle()
    setIsView(isViewModal)
  }, [])

  const MenuComponent = useMemo(() => (
    <Menu closeOnSelect={false}>
      {({ isOpen }) => (
        <>
          <MenuButton
            as={Button}
            isActive={isOpen}
            p={0}
            bg="none"
            _hover={{
              bg: 'none',
            }}
            _active={{
              bg: 'none',
            }}
          >
            <IconButton
              aria-label="This is the icon action"
              w={7}
              h={7}
              bgColor="transparent"
              _hover={{
                bgColor: 'transparent',
              }}
              data-testid="dot-icon"
              transform="rotate(90deg)"
            >
              <Dot />
            </IconButton>
          </MenuButton>
          {isOpenOption && (
            <MenuList border="none" mt="-2.5" bg="transparent" minW={65}>
              <MenuItem bg="transparent">
                <Flex
                  position="absolute"
                  right={4}
                  minW={12}
                  alignItems="center"
                  justifyContent="center"
                  flexDirection="column"
                  gap="10px"
                >
                  <EditIcon
                    w="18px"
                    h="18px"
                    onClick={handleToggleModalProject(false)}
                    data-testid="edit-icon"
                  />
                  <ViewIcon
                    w="18px"
                    h="18px"
                    onClick={handleToggleModalProject(true)}
                    data-testid="View-icon"
                  />
                </Flex>
              </MenuItem>
            </MenuList>
          )}
        </>
      )}
    </Menu>
  ), [])

  return (
    <>
      <Td
        px={5}
        fontSize="md"
        color="text.primary"
        fontWeight="semibold"
        textAlign="center"
        position="relative"
      >
        {isAuthor ? (
          <Button
            p={0}
            bg="none"
            _hover={{
              bg: 'none',
            }}
            _active={{
              bg: 'none',
            }}
            fontSize="sm"
            fontWeight="bold"
            color="text.500"
            onClick={onToggle}
          >
            Edit
          </Button>
        ) : (MenuComponent)
        }
      </Td>
      {isOpen && data && (
        <Modal
          isOpen={isOpen}
          onClose={onToggle}
          title="Edit Author"
          haveCloseButton
          body={
            <AuthorForm
              data={data}
              onSubmit={onUpdateAuthor}
              onCloseModal={onToggle}
            />
          }
        />
      )}

      {isOpen && dataProject && !isView && (
        <Modal
          isOpen={isOpen}
          onClose={onToggle}
          title="Edit Project"
          haveCloseButton
          body={
            <ProjectForm
              data={dataProject}
              onSubmit={onUpdateProject}
              onCloseModal={onToggle}
            />
          }
        />
      )}

      {isOpen && isView && dataProject && (
        <Modal
          isOpen={isOpen}
          onClose={onToggle}
          title="View Detail Project"
          haveCloseButton
          isProjectDetail
          body={
            <ProjectDetail
              projectId={_id}
              image={image}
              name={projectName}
              budget={budget}
              status={status}
              completion={completion}
              description={description}
            />
          }
        />
      )}
    </>
  );
};

const ActionCell = ActionCellComponent;

export default memo(ActionCell, isEqual);
