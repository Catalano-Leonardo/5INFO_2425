export const ordina = (l) => {
    return l.sort((a, b) => {
        if (a.title > b.title) {
            return -1;
        } else if (a.title < b.title) {
            return 1;
        } else {
            return 0;
        }
    });
};
