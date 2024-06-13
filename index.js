document.addEventListener('datashare:ready', ({ detail: { core } }) => {
  core.registerFilter({
    type: 'FilterNamedEntity',
    options: {
      order: 65,
      name: 'namedEntityEmail',
      key: 'byMentions',
      category: 'EMAIL',
      isSearchable: true
    }
  })
})