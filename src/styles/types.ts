export interface Theme {
    spacing: number;
    font: {
        family: {
            inter: string;
            workSans: string;
            rubik: string;
        };
        baseSize: number;
    };
    colors: {
        primary: {
            light: string;
            default: string;
            dark: string;
        };
        secondary: string;
        gray: {
            superLight: string;
            light: string;
            primary: string;
            dark: string;
            superDark: string;
        };
        background: string;
        hover: string;
        active: string;
    };
    breakpoints: {
        mobile: string;
    };
}
