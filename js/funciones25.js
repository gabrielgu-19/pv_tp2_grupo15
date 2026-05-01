export const cambiar_fondo = (color) => {
    document.body.style.backgroundColor = color;
    console.log("El color de fondo ha cambiado a los siguientes valores: " + color);
}

export const color_aleatorio = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}
