import { Printable } from "../utils/printable.js";
import { Comparable } from "./comparable.js";

export interface ModelInterface<T> extends Printable, Comparable<T>
{



}