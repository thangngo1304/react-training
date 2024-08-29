'use client';

import { useCallback, useMemo } from 'react';
import { Controller, useForm } from 'react-hook-form';
import dayjs from 'dayjs';

// Components
import { InputField } from '@/components/common';
import { Button, Flex, Heading, VStack } from '@chakra-ui/react';

// Types
import { TRecordAuthor } from '@/types';

// constants
import { AUTH_SCHEMA, DATE_FORMAT, STATUS_SUBMIT } from '@/constants';

interface AuthorFormProps {
  data?: TRecordAuthor;
  onCloseModal: () => void;
  onSubmit?: (data: TRecordAuthor) => void;
}

const AuthorForm = ({ data, onCloseModal, onSubmit }: AuthorFormProps) => {
  const { id, fields, createdTime } = data || {};
  const {
    name = '',
    email = '',
    avatar = '',
    role = '',
    job = '',
    employed = '',
  } = fields || {};
  const {
    control,
    formState: { isDirty },
    handleSubmit,
    clearErrors,
    reset,
  } = useForm<TRecordAuthor>({
    defaultValues: {
      id: id,
      fields: {
        name: name,
        email: email,
        avatar: avatar,
        role: role,
        job: job,
        employed: dayjs(employed).format(DATE_FORMAT),
      },
      createdTime: createdTime,
    },
  });

  const disabled = useMemo(
    () => !isDirty || status === STATUS_SUBMIT.PENDING,
    [isDirty],
  );

  const handleChangeValue = useCallback(
    <T,>(
      field:
        | 'id'
        | 'fields'
        | 'createdTime'
        | 'fields.name'
        | 'fields.email'
        | 'fields.avatar'
        | 'fields.role'
        | 'fields.job'
        | 'fields.employed'
        | 'fields._id'
        | 'fields.status',
      changeHandler: (value: T) => void,
    ) =>
      (data: T) => {
        clearErrors(field);
        changeHandler(data);
      },
    [clearErrors],
  );

  const handleSubmitForm = useCallback(
    (data: TRecordAuthor) => {
      onSubmit && onSubmit(data);
      onCloseModal();
      reset();
    },
    [onSubmit, onCloseModal, reset],
  );

  return (
    <VStack
      as="form"
      id="update-author-form"
      onSubmit={handleSubmit(handleSubmitForm)}
    >
      <VStack w="100%" alignItems="flex-start">
        <Heading fontSize="md" color="text.500">
          Author
        </Heading>
        <Flex w="100%">
          <Flex mb={{ base: '5px', sm: '5px' }} w="100%">
            <Controller
              rules={AUTH_SCHEMA.NAME}
              control={control}
              name="fields.name"
              render={({
                field,
                field: { onChange },
                fieldState: { error },
              }) => (
                <InputField
                  label='Name'
                  bg="background.100"
                  placeholder="Name"
                  mr={{ md: 2 }}
                  {...field}
                  isError={!!error}
                  errorMessages={error?.message}
                  onChange={handleChangeValue('fields.name', onChange)}
                  data-testid="edit-field-name"
                />
              )}
            />
          </Flex>
          <Flex mb={{ base: '5px', sm: '5px' }} w="100%">
            <Controller
              control={control}
              rules={AUTH_SCHEMA.EMAIL}
              name="fields.email"
              render={({
                field,
                field: { onChange },
                fieldState: { error },
              }) => (
                <InputField
                  label='Email'
                  bg="background.100"
                  placeholder="Email"
                  mr={{ md: 2 }}
                  {...field}
                  isError={!!error}
                  errorMessages={error?.message}
                  onChange={handleChangeValue('fields.email', onChange)}
                  data-testid="edit-field-email"
                />
              )}
            />
          </Flex>
        </Flex>
        <Flex mb={{ base: '5px', sm: '5px' }} w="100%">
          <Controller
            control={control}
            rules={AUTH_SCHEMA.IMAGE}
            name="fields.avatar"
            render={({ field, field: { onChange }, fieldState: { error } }) => (
              <InputField
                label='Avatar'
                bg="background.100"
                placeholder="Avatar"
                accept="image/*"
                mr={{ md: 2 }}
                {...field}
                isError={!!error}
                errorMessages={error?.message}
                onChange={handleChangeValue('fields.avatar', onChange)}
                data-testid="edit-field-avatar"
              />
            )}
          />
        </Flex>
      </VStack>
      <VStack w="100%" alignItems="flex-start">
        <Heading fontSize="md" color="text.500">
          Function
        </Heading>
        <Flex>
          <Flex w="100%" mb={{ base: '5px', sm: '5px' }}>
            <Controller
              control={control}
              rules={AUTH_SCHEMA.ROLE}
              name="fields.role"
              render={({
                field,
                field: { onChange },
                fieldState: { error },
              }) => (
                <InputField
                  label='Role'
                  bg="background.100"
                  placeholder="Role"
                  mr={{ md: 2 }}
                  {...field}
                  isError={!!error}
                  errorMessages={error?.message}
                  onChange={handleChangeValue('fields.role', onChange)}
                  data-testid="edit-field-role"
                />
              )}
            />
          </Flex>
          <Flex w="100%" mb={{ sm: '5px' }}>
            <Controller
              rules={AUTH_SCHEMA.JOB}
              control={control}
              name="fields.job"
              render={({ field, fieldState: { error } }) => (
                <InputField
                  label='Job'
                  bg="background.100"
                  placeholder="Job"
                  {...field}
                  isError={!!error}
                  errorMessages={error?.message}
                  onChange={handleChangeValue('fields.job', field.onChange)}
                  data-testid="edit-field-job"
                />
              )}
            />
          </Flex>
        </Flex>
      </VStack>
      <VStack w="100%" alignItems="flex-start">
        <Heading fontSize="md" color="text.500">
          Employed
        </Heading>
        <Flex w="100%" mb={{ sm: '5px' }}>
          <Controller
            rules={AUTH_SCHEMA.EMPOLYED}
            control={control}
            name="fields.employed"
            render={({ field, fieldState: { error } }) => (
              <InputField
                label='Employed'
                bg="background.100"
                type="date"
                placeholder="Employed"
                {...field}
                isError={!!error}
                errorMessages={error?.message}
                onChange={handleChangeValue('fields.employed', field.onChange)}
                data-testid="edit-field-employed"
              />
            )}
          />
        </Flex>
      </VStack>

      <Flex my={4}>
        <Button
          type="submit"
          form="update-author-form"
          data-testid="submit-author-form"
          w={44}
          h="full"
          bg="green.600"
          mr={3}
          isDisabled={disabled}
        >
          Save
        </Button>
        <Button
          w={44}
          h="full"
          bg="orange.300"
          _hover={{ bg: 'orange.400' }}
          onClick={onCloseModal}
        >
          Cancel
        </Button>
      </Flex>
    </VStack>
  );
};

const AuthorFormMemorized = AuthorForm;
export default AuthorFormMemorized;
