export type ComputedMatch<Params extends { [K in keyof Params]?: string } = {}> = Readonly<{
    params: Params;
}>;
