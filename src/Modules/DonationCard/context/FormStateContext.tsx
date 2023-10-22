import { createContext, useContext, useState, ReactNode } from 'react';

type FormStateContextProps = {
    formState: Record<string, any>;
    setFormState: React.Dispatch<React.SetStateAction<Record<string, any>>>;
}

const FormStateContext = createContext<FormStateContextProps | undefined>(undefined);

type FormStateProviderProps = {
    children: ReactNode;
}

export const FormStateProvider: React.FC<FormStateProviderProps> = ({ children }) => {
    const [formState, setFormState] = useState<Record<string, any>>({});
    return (
        <FormStateContext.Provider value={{ formState, setFormState }}>
            {children}
        </FormStateContext.Provider>
    );
};

export const useFormState = (): FormStateContextProps => {
    const context = useContext(FormStateContext);
    if (!context) {
        throw new Error('useFormState must be used within a FormStateProvider');
    }
    return context;
};
