interface Asset {
    [key: string]: number;
}

interface Exchange {
    name: string;
    type: string;
    assets: Asset;
}

export { Exchange, Asset };