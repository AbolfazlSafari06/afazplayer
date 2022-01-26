import { Song } from "./models/Song";
import { v4 as uuidv4 } from 'uuid';

export default function musicData(): Song[] {
    return [

        new Song("Antimidas",
            "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
            "Parkbench Epiphany",
            "https://mp3.chillhop.com/serve.php/?mp3=27500"
            , ["rgb(9 11 13)", "rgb(131 134 141)"],
            uuidv4()),
        new Song("la zona",
            "https://chillhop.com/wp-content/uploads/2021/11/3ff29a35be582c8dc0222273cb9c401ea6b209dc-1024x1024.jpg",
            "Maydee",
            "https://mp3.chillhop.com/serve.php/?mp3=27455"
            , ["rgb(181 196 214)", "rgb(100 46 35)"],
            uuidv4()),
        new Song("Looking In",
            "https://chillhop.com/wp-content/uploads/2021/08/af3ce13ad39d38057f00144f8a7c295877ccfec1-1024x1024.jpg",
            "Smile High, Teddy Roxpin",
            "https://mp3.chillhop.com/serve.php/?mp3=23335"
            , ["hsl(186deg 37% 42%)", "hsl(234deg 66% 17%)"],
            uuidv4()),
        new Song("Samething",
            "https://i.scdn.co/image/ab67616d0000b2737da10e061e997fe4ce77e7ea",
            "SwuM",
            "https://mp3.chillhop.com/serve.php/?mp3=15236"
            , ["hsl(175deg 15% 17%)", "hsl(38deg 35% 24%)"],
            uuidv4()),
        new Song("Samething",
            "https://i.scdn.co/image/ab67616d0000b2737da10e061e997fe4ce77e7ea",
            "SwuM",
            "https://mp3.chillhop.com/serve.php/?mp3=15236"
            , ["hsl(175deg 15% 17%)", "hsl(38deg 35% 24%)"],
            uuidv4()),
        new Song("Samething",
            "https://i.scdn.co/image/ab67616d0000b2737da10e061e997fe4ce77e7ea",
            "SwuM",
            "https://mp3.chillhop.com/serve.php/?mp3=15236"
            , ["hsl(175deg 15% 17%)", "hsl(38deg 35% 24%)"],
            uuidv4()),
        new Song("Samething",
            "https://i.scdn.co/image/ab67616d0000b2737da10e061e997fe4ce77e7ea",
            "SwuM",
            "https://mp3.chillhop.com/serve.php/?mp3=15236"
            , ["hsl(175deg 15% 17%)", "hsl(38deg 35% 24%)"],
            uuidv4()),

    ]

}