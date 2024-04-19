import React from "react"
interface IFormattedData {
    [key: string]: {
        name: string;
        price: string;
        image: string;
    }[]
}
export default function Testing() {
    React.useEffect(() => {
        fetch("/menu.csv")
            .then(response => response.text())
            .then(data => {
                console.log(data);
                const rows = data.split("\n");
                const csvData = rows.map(row => row.replace(/\r$/, "").split(","));
                const formattedData = csvData.reduce((acc: IFormattedData, row, index) => {
                    if (index === 0) return acc;
                    const [type, item, price, image] = row;
                    if (!acc[type]) {
                        acc[type] = [];
                    }
                    acc[type].push({ name: item, price, image });
                    return acc;
                }, {});
                console.log(formattedData);
            });

    }, [])
    return <div className="relative w-screen h-screen wrapper">
        <div className="absolute z-0 w-screen h-screen bg-pink-300 svg-background">CSV Data fetching...</div>
    </div>
}

