function findMatching(drivers, name) {
  return drivers.filter(driver => driver.toLocaleLowerCase() === name.toLocaleLowerCase());
}

function fuzzyMatch(drivers, name) {
  return drivers.filter(driver => driver.toLocaleLowerCase().startsWith(name.toLocaleLowerCase()))
}

function matchName(drivers, name) {
  return drivers.filter(driver => driver.name.toLocaleLowerCase() === name.toLocaleLowerCase());
}
