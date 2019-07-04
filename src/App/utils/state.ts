export function unset<State extends object>(state: State, attributes: string | string[]) {
    const newState = { ...state };

    if (typeof attributes === 'string') {
        attributes = [attributes];
    }
    for (const attribute of attributes) {
        const key = attribute as keyof State;

        if (newState.hasOwnProperty(key)) {
            delete newState[key];
        }
    }
    return newState;
}
