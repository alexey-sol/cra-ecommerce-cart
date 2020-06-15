import {
    ALTERNATIVE,
    EXTREME,
    FUTURE_POP,
    SOUNDTRACKS,
    SYNTHWAVE
} from "utils/const/categories";

const SECTIONS = [{
    id: 1,
    imageUrl: "https://i.ibb.co/f9Snfr3/Future-Pop-Showcase.png",
    linkUrl: `shop/${FUTURE_POP}`,
    title: FUTURE_POP
}, {
    id: 2,
    imageUrl: "https://i.ibb.co/tYDTvq3/Alternative-Showcase.png",
    linkUrl: `shop/${ALTERNATIVE}`,
    title: ALTERNATIVE
}, {
    id: 3,
    imageUrl: "https://i.ibb.co/SQ3VYS0/Extreme-Showcase.png",
    linkUrl: `shop/${EXTREME}`,
    title: EXTREME
}, {
    id: 4,
    imageUrl: "https://i.ibb.co/wBsWZjp/Synthwave-Showcase.png",
    linkUrl: `shop/${SYNTHWAVE}`,
    size: "large",
    title: SYNTHWAVE
}, {
    id: 5,
    imageUrl: "https://i.ibb.co/6bq90Z6/Soundtracks-Showcase.png",
    linkUrl: `shop/${SOUNDTRACKS}`,
    size: "large",
    title: SOUNDTRACKS
}];

export default SECTIONS;
