const getContactList = jest.fn().mockImplementation(() => {
    return new Promise(resolve => {
        ['aa', 'bb'];
    });
});

export default getContactList;
