export default function UpdateUser() {
  const { mutateAsync: updateUser, isLoading } = useUpdateUser();

  const onSubmit = (data) => {
    updateUser(data, {
      onSuccess: () => {},
    });
  };

  return (
    <>
      <UserForm intValue={defaultValues} submit={onSubmit} />
    </>
  );
}
