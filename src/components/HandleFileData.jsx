import { workDaysCalc } from "../utils/workDaysCalculator";

/**
 * Handle file from user`s file system, read and convert in usable data
 * @param {function} handleFileRead - read the file and convert the data
 * @param {function} handleFileChosen - choose file from the file system
 * @param {function} workDaysCalc - find the worked days
 * @returns {JSX}
 */

const UploadFile = ({ setEmployeesList }) => {
  let fileReader;
  const handleFileRead = (e) => {
    const content = fileReader.result.split("\n");
    let employees = [];
    content.forEach((element) => {
      const [emdId, projectId, dateFrom, dateTo] = element.trim().split(",");
      let convertedDateFrom = new Date(dateFrom);
      let convertedDateTo =
        dateTo?.trim() !== "NULL" ? new Date(dateTo) : new Date();
      let employee = {
        employerID: emdId?.trim(),
        projectID: projectId?.trim(),
        dateFrom: dateFrom?.trim(),
        dateTo:
          dateTo?.trim() !== "NULL"
            ? dateTo?.trim()
            : new Date().toISOString().slice(0, 10)?.trim(),
        workedDays: workDaysCalc(convertedDateTo, convertedDateFrom),
      };
      employee.employerID && employees?.push(employee);
    });
    setEmployeesList(employees);
  };

  const handleFileChosen = (file) => {
    fileReader = new FileReader();
    fileReader.onloadend = handleFileRead;
    file && fileReader?.readAsText(file);
  };

  return (
    <div>
      <input
        className="upload__button"
        type="file"
        accept=".txt"
        onChange={(e) => handleFileChosen(e.target.files[0])}
      />
    </div>
  );
};
export default UploadFile;
