const documents = [
  {
    title: 'war and peace',
    content: 'la la la 123'
  },
  {
    title: 'war and peace 2',
    content: 'la la la 456'
  },
  {
    title: 'war and peace 3, the revenge',
    content: 'la la la 789'
  },
];

export default documents;

/*

Step 0: list titles on left.

Step 1: when user clicks on title on left, content loads in box on right

Step 2: When user updates content on right, save the changes to the `documents` variable. (Maybe...state?)

---

Bonus:

- save docs to localStorage (loading from localStorage on page load)
- let user create new documents
- add a search box that filters the list on the left
- add a markdown preview


*/