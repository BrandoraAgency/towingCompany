import Papa from 'papaparse';
export const downloadCSV=(json)=>{
    const csv = Papa.unparse(json);
    const filename = 'data.csv';

    // Create a hidden link element and click it to download the file
    const link = document.createElement('a');
    link.setAttribute('href', 'data:text/csv;charset=utf-8,' + encodeURIComponent(csv));
    link.setAttribute('download', filename);
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}