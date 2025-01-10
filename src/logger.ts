// Just log the state on the server 

import { games } from "./store";


export function startLogger() {
    setInterval(() => {
        console.log(games);
    }, 5000);
}
