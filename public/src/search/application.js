import elements from "./elements.js";
import render from "./view.js";

const app = () => {
    const host = 'http://localhost:3000';

    elements.formSearchAllCatridge.addEventListener('submit', async (event) => {
        event.preventDefault();
        const { data } = await axios.get(`${host}/catridge`);
        render(data, 'formSearchAllCatridge');
    });

    elements.formSearchByName.addEventListener('submit', async (event) => {
        event.preventDefault();
        const catridgeName = elements.inputCatridgeName.value;
        const { data } = await axios.get(`${host}/catridge/${catridgeName}`);
        render(data, 'formSearchByName');
    })

    elements.formSearchByPrinter.addEventListener('submit', async (event) => {
        event.preventDefault();
        const printerName = elements.inputPrinterName.value;
        const { data } = await axios.get(`${host}/catridge/byprinter/${printerName}`);
        render(data, 'formSearchByPrinter');
    })

    elements.formSearchByBalance.addEventListener('submit', async (event) => {
        event.preventDefault();
        const { data } = await axios.get(`${host}/catridge/badinfo`);
        console.log(data)
        render(data, 'formSearchByBalance');
    })
};

export default app;