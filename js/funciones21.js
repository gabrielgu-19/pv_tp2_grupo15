export const cambiar_capital = (paises, capitales) => {
    const indicePais = paises.selectedIndex;
    capitales.selectedIndex = indicePais;
    const nombrePais = paises.options[indicePais].text;
    const nombreCapital = capitales.options[indicePais].text;
    console.log(`El pais seleccionado es: ${nombrePais} y la capital seleccionada es: ${nombreCapital}`);
};