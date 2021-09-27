import React, { useContext, createContext, useState, ReactChild, FC } from 'react';

interface ISectionContext {
    data: string;
    saveData: (text: string) => void;
}


export const SectionContext = createContext<ISectionContext>({
    data: "personagens",
    saveData: (text: string) => { }
});

interface IProps {
    children: ReactChild | JSX.Element | JSX.Element[];
}

const SectionProvider: FC<IProps> = ({ children }) => {
    const [section, setSection] = useState<string>('personagens');

    const saveData = (text: string) => {
        setSection(text);
    };


    return (
        <>
            <SectionContext.Provider value={{
                data: section,
                saveData
            }}>
                {children}
            </SectionContext.Provider>
        </>
    );
};

export const useSection = () => useContext(SectionContext);

export default SectionProvider;