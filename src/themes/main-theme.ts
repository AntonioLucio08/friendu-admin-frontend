import {palette} from "./color-palette";
import {createTheme} from "@mui/material";


const { light } = palette;

export const mainTheme = createTheme({
    palette: {
        primary: {
            main: light.primary.main,
            light: light.primary.light,
            dark: light.primary.dark,
        },
        secondary: {
            main: light.secondary.main,
            light: light.secondary.light,
            dark: light.secondary.dark,
        },
        info: {
            main: light.info.main,
            light: light.info.light,
            dark: light.info.dark,
        },
        // error: {},
        // success: {},
        // warning: {},
    },
    components: {
        MuiButton: {
            defaultProps: {
                variant: 'contained',
                size: 'small',
                disableElevation: true,
                color: "info",
            },
            styleOverrides: {
                root: {
                    width: 100,
                    height: 300,
                    textTransform: 'none',
                    boxShadow: 'none',
                    borderRadius: 10,
                    ":hover": {
                        backgroundColor: 'rgba(0,0,0,0.05)',
                        transition: 'all 0.3s ease-in-out'
                    }
                }
            }
        },
    }
})