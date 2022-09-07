export const getFilteredContacts = ({ contacts: { items, filter } }) => {
  const normalizedText = filter.toLocaleLowerCase();
  return items.filter(item =>
    item.name.toLocaleLowerCase().includes(normalizedText)
  );
};
