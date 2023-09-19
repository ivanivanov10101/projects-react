import React, { createContext, useState } from "react"

const initialLightModeContextValue = {
    lightMode: false,
    toggleLightMode: () => { }
}
const LightModeContext = createContext<{
    lightMode: boolean;
    toggleLightMode: () => void;
}>(initialLightModeContextValue);

type Props = {
    children: React.ReactNode
}

function LightModeProvider({ children }: Props) {
    const [lightMode, setLightMode] = useState<boolean>(false);
    const toggleLightMode = () => {
        setLightMode(!lightMode);
    }

    return (
        <div>
            <LightModeContext.Provider value={{ lightMode, toggleLightMode: toggleLightMode }}>
                {children}
            </LightModeContext.Provider>
        </div>
    )
}

export { LightModeContext, LightModeProvider };
