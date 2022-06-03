export type ServerResponse = {
    data: ServerData[]
}

export type ServerData = {
    name: name
    capital: string
    region: string
    population: number
    flags?: flags
    subregion: string
    languages: languages
    currencies: currencies
    borders: string[]
    tld: string[]
}

type languages = {
    [index: string]: string
}

type currencies = {
    [key: string]: string
}

export type flags = {
    svg: string
    png: string
}

export type name = {
    common:string
    official: string
    nativeName: nativeName
}

export type nativeName = {
    [key: string]: string
}

export type por = {
    official: string
    common: string
}

export type RoutesProps = {
    countries: ServerData[]
    setCountries: (data: ServerData[]) => void
}

export type InputAreaProps = {
    inputValue: string
    setInputValue: (data: string) => void
    handleFilterByName: () => void
    handleFilterByRegion: (data: string) => void
}

export type CountryProps = {
    countries: ServerData[]
}

