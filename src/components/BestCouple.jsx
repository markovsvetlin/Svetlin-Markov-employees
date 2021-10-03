import { sortProjects } from "../utils/sortProjectsById";
import { splitObjBy } from "../utils/splitObjBy";
import { findBestCouple } from "../utils/findBestCouple";

/**
 * Best Couple component - find the best couple sorted by worked days together
 * @param {function} sortProjects - sort projects by ID and after that sort them by worked days
 * @param {function} splitObjBy - split the objects with same project id in arrays
 * @param {function} findBestCouple - find the couple with highest worked days together
 * @returns {JSX}
 */

const BestCouple = ({ employeesList }) => {
  employeesList && sortProjects(employeesList);
  const couplesOnSameProjects = splitObjBy(employeesList, "projectID");
  const bestCouple = findBestCouple(couplesOnSameProjects);

  return (
    <>
      <table className="result__table">
        <tr className="table__heading">
          <th>Employee ID #1</th>
          <th>Employee ID #2</th>
          <th>Project ID</th>
          <th>Days worked</th>
        </tr>

        {bestCouple && (
          <tr className="table__elements">
            <td>{bestCouple?.employerOneId}</td>
            <td>{bestCouple?.employerTwoId}</td>
            <td>{bestCouple?.projectId}</td>
            <td>{bestCouple?.workedTogether}</td>
          </tr>
        )}
      </table>
    </>
  );
};

export default BestCouple;
