export const sortProjects = (employees) => {
  employees
    .sort((a, b) => a.projectID - b.projectID)
    .sort((a, b) =>
      a.projectID === b.projectID ? b.workedDays - a.workedDays : ""
    );
};
