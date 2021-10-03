export const findBestCouple = (data) => {
  let structuredData = [];
  Object.values(data).forEach((item) => {
    let couple = {
      employerOneId: item[0].employerID,
      employerTwoId: item[1].employerID,
      projectId: item[0].projectID,
      workedTogether: item[0].workedDays + item[1].workedDays,
    };
    structuredData.push(couple);
  });
  structuredData.sort((a, b) => b.workedTogether - a.workedTogether);
  return structuredData[0];
};
