export const productsList:Product[] = [
    {id: 1, artist: 'Iron Maiden', album: 'Iron Maiden', price: 11, info:"First album of the greatest band"},
    {id: 2, artist: 'Black Sabbath', album: 'Paranoid', price: 9, info:"Best-seller album of the first band"},
    {id: 3, artist: 'AC/DC', album: 'Highway to Hell', price: 12},
    {id: 4, artist: 'Judas Priest', album: 'Painkiller', price: 9.5, info:"Heaviest nad fastest album of this band"},
    {id: 5, artist: 'King Diamond', album: 'Abigail', price: 8.95},
    {id: 6, artist: 'Motorhead', album: 'Ace os Spades', price: 12},
    {id: 7, artist: 'Kiss', album: 'Destroyer', price: 10.95, info:"Rock and roll all nite"},
    {id: 8, artist: 'Pantera', album: 'Vulgar Display of Power', price: 11},
    {id: 9, artist: 'Sepultura', album: 'Roots', price: 10.95},
    {id: 10, artist: 'Metallica', album: 'Master of Puppets', price: 14, info:"Best-seller of the best-seller band"}
]

export interface Product {
    id: number | string,
    artist: string,
    album: string,
    price: number,
    info?: string
}