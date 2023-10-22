const BASE_MULTIPLIER = 8;

const theme = {
    spacing: BASE_MULTIPLIER,
    colors: {
        primary: "#423C66",
        secondary: "#595D7B",
        grey: '#F4F8FA'
    },
    fontSize: {
        regular: `${BASE_MULTIPLIER * 2}px`,
    },
    border: {
        radius: `${BASE_MULTIPLIER}px`
    },
    breakpoints: {
        mobile: '425px',
    }
};

export default theme;