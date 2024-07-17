import elements from "./elements.js";

const getPrintersList = (catridgeData) => catridgeData.printers.join(', ')

const render = (data, path) => {
    if(path === 'formSearchAllCatridge') {
        const catridges = Object.keys(data);
        const htmlData = catridges.map((catridgeName) => {
            return `
                <div>
                    <h3>${catridgeName}</h3>
                    <h5>Количество: ${data[catridgeName].count}</h5>
                    <h5>Совместимые принтеры: ${getPrintersList(data[catridgeName])}</h5>
                </div>
            `;
        });

        elements.containerResult.innerHTML = htmlData.join('')
    };

    if(path === 'formSearchByName') {
        const htmlData = `
            <div>
                <h3>${data.name}<h3>
                <h5>Количество: ${data.count}</h5>
                <h5>Компания производитель: ${data.brand}</h5>
                <h5>Совместимые принтеры: ${getPrintersList(data)}</h5>
                <h5>Допустимый остаток: ${data.allowableBalance}</h5>
                <h5>Цвет: ${data.count}</h5>
            </div>
        `;

        elements.containerResult.innerHTML = htmlData;
    }

    if(path === 'formSearchByPrinter') {
        const catridges = Object.keys(data);
        const htmlData = catridges.map((catridgeName) => {
            return `
                <div>
                    <h3>${catridgeName}</h3>
                    <h5>Количество: ${data[catridgeName].count}</h5>
                    <h5>Совместимые принтеры: ${getPrintersList(data[catridgeName])}</h5>
                </div>
            `;
        });

        elements.containerResult.innerHTML = htmlData.join('')
        
    }

    if(path === 'formSearchByBalance') {
        const catridges = Object.keys(data);
        const htmlData = catridges.map((catridgeName) => {
            return `
                <div>
                    <h3>${catridgeName}</h3>
                    <h5>Количество: ${data[catridgeName].count}</h5>
                    <h5>Совместимые принтеры: ${getPrintersList(data[catridgeName])}</h5>
                </div>
            `;
        });

        elements.containerResult.innerHTML = htmlData.join('')
    }
};

export default render;