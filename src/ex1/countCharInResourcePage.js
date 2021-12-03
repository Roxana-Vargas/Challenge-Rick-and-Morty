const countCharInResourcePage = (json, character) => {
    
    const regExStr = `[^${character}]`;
    const regEx = new RegExp(regExStr, 'gi')
    
    const totalCount = json
        .map((resource) => resource.name)
        .map((name) =>  (name.replace(regEx, "").length))
        .reduce((a, b) => a + b);

    return totalCount;
}

export default countCharInResourcePage;
