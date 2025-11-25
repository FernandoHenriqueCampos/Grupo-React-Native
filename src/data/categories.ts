import { ImageSourcePropType } from "react-native";
import { RootStackParamList } from "../@types/types";

type CategoryItem = {
  id: string;
  name: string;
  description: string;
  image: ImageSourcePropType;
  route: keyof RootStackParamList;
};

const dogImg = require("../assets/goldenHome.jpg");
const catImg = require("../assets/gatoHome.jpg");
const dogImg2 = require("../assets/Filhotes.webp");

export const CATEGORIES: CategoryItem[] = [
  {
    id: "1",
    name: "Cachorros",
    description: "O seu melhor amigo se encontra aqui.",
    image: dogImg,
    route: "StackCaes",
  },
  {
    id: "2",
    name: "Gatos",
    description: "O animal mais tranquilo, ideal para quem gosta de silêncio.",
    image: catImg,
    route: "StackGatos",
  },
  {
    id: "3",
    name: "Filhotes",
    description: "Adote um filhote e dê-lhe a chance de uma vida melhor.",
    image: dogImg2,
    route: "StackFilhotes",
  },
];
