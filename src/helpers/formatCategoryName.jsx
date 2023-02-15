const formatCategoryName = (name) => {
    const prefix = ['Entertainment: ', 'Science: '];
    for (const p of prefix) {
        if (name.startsWith(p)) {
            return name.substring(p.length);
        }
    }
    return name;
};

export default formatCategoryName;
