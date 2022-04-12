import { EGameType } from "@/interfaces/global.interface";
import { createStore } from "vuex";
import gameModule from "./modules/game.module";

export default createStore({
  modules: { gameModule },
});
