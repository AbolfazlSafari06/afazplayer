export class Song {
    constructor(
        name: string,
        cover: string,
        artist: string,
        audio: string,
        colors: string[],
        id: string,
        active: boolean = true
    ) {
        this.name = name;
        this.cover = cover;
        this.artist = artist;
        this.audio = audio;
        this.colors = colors;
        this.id = id;
        this.active = active;
    }
    name: string;
    cover: string;
    artist: string;
    audio: string;
    colors: string[];
    id: string;
    active: boolean;
}
export type SongInfo = {
    currentTime: number | null;
    duration: number | null;
    animationPrecentage: number
} 
