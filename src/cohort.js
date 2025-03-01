class CohortManager {
  constructor() {
    this.cohorts = []
  }

  createCohort(name) {
    const newCohort = {
      cohortName: name,
      students: []
    }
    this.cohorts.push(newCohort)
    return this.cohorts
  }

  searchCohort(name) {
    const targCoh = this.cohorts.find((c) => c.cohortName === name)
    if (!targCoh) {
      throw new Error('Cohort does not exist')
    }
    return targCoh
  }

  createStudent(coh, firstName, lastName, gitUserName, email) {
    const tInd = this.cohorts.findIndex((c) => c.cohortName === coh)
    if (tInd === -1) {
      throw new Error('Cohort does not exist')
    }
    const newId = this.cohorts[tInd].students.length + 1
    const newStudent = {
      studentId: newId,
      firstName: firstName,
      lastName: lastName,
      gitUserName: gitUserName,
      email: email
    }
    this.cohorts[tInd].students.push(newStudent)
    return this.searchCohort(coh)
  }

  removeCohort(name) {
    const tInd = this.cohorts.findIndex((c) => c.cohortName === name)
    if (tInd === -1) {
      throw new Error('Cohort does not exist')
    }
    this.cohorts.splice(tInd, 1)
    return this.cohorts
  }

  removeStudent(coh, stuId) {
    const tCohInd = this.cohorts.findIndex((c) => c.cohortName === coh)
    if (tCohInd === -1) {
      throw new Error('Cohort does not exist')
    }
    const tStuInd = this.cohorts[tCohInd].students.findIndex(
      (s) => s.studentId === stuId
    )
    if (tStuInd === -1) {
      throw new Error('Student does not exist')
    }
    this.cohorts[tCohInd].students.splice(tStuInd, 1)
    return this.searchCohort(coh)
  }
}

module.exports = CohortManager
