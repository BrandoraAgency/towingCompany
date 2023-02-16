import Papa from 'papaparse';
export const downloadCSV=(json)=>{
    const csvData=json;
    csvData.forEach(element => {
        delete element.towingCompany
        delete element.vinNO
        delete element.notes
        delete element.assignto
        delete element.isApproved
        delete element.phone
    });
    console.log(csvData);
    const csv = Papa.unparse(csvData);
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