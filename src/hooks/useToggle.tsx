import { useState } from "react";

const useToggle = (init = false): [boolean, (newState?: boolean) => void] => {
    const [state, setState] = useState<boolean>(init);

    const toggle = (newState?: boolean) => {
        setState((prev) => (newState !== undefined ? newState : !prev));
    };

    return [state, toggle];
};

export default useToggle;
