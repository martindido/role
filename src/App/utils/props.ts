export const createPropsGetter = <DefaultProps extends object>(defaultProps: DefaultProps) => {
    return <Props extends Partial<DefaultProps>>(props: Props) => {
        type PropsExcludingDefaults = Pick<Props, Exclude<keyof Props, keyof DefaultProps>>;
        type PropsWithDefaults = DefaultProps & PropsExcludingDefaults;
        return (props as any) as PropsWithDefaults;
    };
};
