import { createTheme, ThemeProvider } from "@mui/material";
import { createContext, useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { shadows } from "./shadows";
import { palette } from "./palette";
import { customShadows } from "./custom-shadows";
import { pxToRem, typography } from "./typography";
export const ColorModeContext = createContext({
    toggleMode: () => { },
    mode: 'light'
})

export const ColorContextProvider = ({ children }) => {
    const [mode, setMode] = useState('light');
    const { config } = useSelector(state => state);

    const colorMode = useMemo(
        () => ({
            toggleMode: () => setMode(prevMode => prevMode === 'light' ? 'dark' : 'light'),
            mode
        }), [mode]
    );

    const theme = createTheme({
        breakpoints: {
            values: {
                xs: 0,
                sm: 450,
                md: 600,
                lg: 900,
                xl: 1024
            }
        },

        palette: palette(mode, config?.primaryColor, config?.secondaryColor),
        shadows: shadows(mode),
        customShadows: customShadows(mode),
        shape: { borderRadius: 8 },
        typography: {
            fontFamily: config?.font ? `${config?.font}, sans-serif` : "Avernir, sans-serif",
            ...typography,
        },
        // components
        components: {
            MuiButton: {
                styleOverrides: {
                    root: {
                        borderRadius: pxToRem(config?.btnRadius || 4), // Customize the button's border radius
                        textTransform: 'capitalize',
                        pointerEvents: 'auto',
                        cursor: 'inherit'
                    }
                },
            },

            MuiTextField: {
                styleOverrides: {
                    root: {
                        pointerEvents: 'auto',

                    }
                },
            },



        },
    })


    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>
                {children}
            </ThemeProvider>
        </ColorModeContext.Provider>
    )

}