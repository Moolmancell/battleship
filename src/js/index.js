import "../index.css";
import interact from 'interactjs'
import { Gameboard } from "./gameboard";
import { Player } from "./player";
import { Ship } from "./ship";
import { renderGameboard } from "./render-gameboard";

renderGameboard("gameboard-player-1");

import "./drag-place-ship";