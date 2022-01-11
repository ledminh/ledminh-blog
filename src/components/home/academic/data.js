import sjsuPhoto from "./imgs/sjsu.jpg";
import deanzaPhoto from "./imgs/deanza.jpg";
import freecodecampPhoto from "./imgs/freecodecamp.svg";

export const AcademicData = [
    {
        photo: sjsuPhoto,
        title: "San Jose State University",
        description: "Bachelor's degree, Computer Science, GPA: 3.8",
        duration: {
            from: "2018",
            to: "2020"
        },
        link: "https://1drv.ms/b/s!AolUKobORt1CrfQEZXKp0RxPvoc2tA?e=XIUZsR"
    },

    {
        photo: deanzaPhoto,
        title: "De Anza College",
        description: "Associate's degree, Computer Science",
        duration: {
            from: "2013",
            to: "2017"
        },
        link: "https://www.deanza.edu/"
    },

    {
        photo: freecodecampPhoto,
        title: "Free Code Camp",
        description: "Full Stack Web Development Certification",
        duration: {
            from: "2015",
            to: "2016"
        },
        link: "https://www.freecodecamp.org/certification/ledminh/legacy-front-end"
    }
]