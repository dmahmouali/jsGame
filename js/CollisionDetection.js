export function collisionDetection(element2, element1) {
    let prams1 = element1.getBoundingClientReact();
    let prams2 = element2.getBoundingClientReact();

    if (prams1.left < prams2.left + prams2.width) {
        return true;
    } else return false;
}