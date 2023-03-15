import { v4 as uuidv4 } from "uuid";
import {
  AdicolorClassicsJoggers,
  NikeSportswearFuturaLuxe,
  GeometricPrintScarf,
  YellowReservedHoodie,
  BasicGreenDress,
} from "./assets/products";

export const products = [
  {
    id: uuidv4(),
    name: "Adicolor Classics Joggers",
    price: 63.85,
    category: "dress",
    image: AdicolorClassicsJoggers,
    onSale: true,
    discount: 0,
    sizes: ["xs", "sm", "m", "l"],
  },
  {
    id: uuidv4(),
    name: "Nike Sports wear Futura Luxe",
    price: 130,
    category: "bag",
    image: NikeSportswearFuturaLuxe,
    onSale: false,
    discount: 0.1, //10%
    sizes: ["xs", "sm", "m", "l", "xl", "xxl"],
  },
  {
    id: uuidv4(),
    name: "Geometric print Scarf",
    price: 53,
    category: "Scarf",
    image: GeometricPrintScarf,
    onSale: false,
    discount: 0,
    sizes: ["xs", "sm", "m", "l", "xl", "xxl"],
  },
  {
    id: uuidv4(),
    name: "Yellow Reserved Hoodie",
    price: 364,
    category: "hoodie",
    image: YellowReservedHoodie,
    onSale: false,
    discount: 0.15, // 15%
    sizes: ["xs", "sm", "m", "l", "xl", "xxl"],
  },
  {
    id: uuidv4(),
    name: "Basic Green Dress",
    price: 236,
    category: "dress",
    image: BasicGreenDress,
    onSale: true,
    discount: 0,
    sizes: ["xs", "sm", "m", "l", "xl", "xxl"],
  },
  {
    id: uuidv4(),
    name: "Red Dress",
    price: 300,
    category: "dress",
    image: BasicGreenDress,
    onSale: false,
    discount: 0,
    sizes: ["SM", "M", "L"],
  },
];
