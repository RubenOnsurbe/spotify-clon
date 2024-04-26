import { colors } from "./colors";

export interface Playlist {
    id: string;
    albumId: number;
    title: string;
    color: (typeof colors)[keyof typeof colors];
    cover: string;
    artists: string[];
}

export const playlists: Playlist[] = [
    {
        id: '1',
        albumId: 1,
        title: "Temazos Ruben",
        color: colors.red,
        cover:
            "https://i.scdn.co/image/ab67616d0000b2733a139a31833d064d9af843f9",
        artists: ["Cero", "Blessd", "Bryant Myers", "Gonzy"],
    },

];

export const morePlaylists = playlists.map((item) => ({
    ...item,
    id: item.id + "_more",
}))

export const sidebarPlaylists = playlists.map((item) => ({
    ...item,
    id: item.id + "_side",
}))

export const allPlaylists = [
    ...playlists,
    ...morePlaylists,
    ...sidebarPlaylists,
]

export interface Song {
    id: number;
    albumId: number;
    title: string;
    image: string;
    artists: string[];
    album: string;
    duration: string;
}

export const songs: Song[] = [

    {
        "id": 1,
        "albumId": 1,
        "title": "Palabras Sobran",
        "image": "https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/01/bf/37/01bf3716-8a9b-b321-7367-dec62bbb556f/5054197828829.jpg/1200x1200bb.jpg",
        "artists": ["Blessd", "Bryant Myers"],
        "album": "Temazos Ruben",
        "duration": "4:48"
    },
    {
        "id": 2,
        "albumId": 1,
        "title": "Patio Andaluz",
        "image": "https://i.ytimg.com/vi/JiCjVjUTXmg/maxresdefault.jpg",
        "artists": ["Cero"],
        "album": "Temazos Ruben",
        "duration": "2:21"
    },
    {
        "id": 3,
        "albumId": 1,
        "title": "Friki",
        "image": "    https://i.ytimg.com/vi/HHBaoQ6DSw4/maxresdefault.jpg",
        "artists": ["Gonzy"],
        "album": "Temazos Ruben",
        "duration": "3:12"
    },


]