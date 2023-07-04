export default function cleanSet(set, startString) {
  const filteredSet = Array.from(set).filter(el => el.startsWith(startString));
  return filteredSet.map(el => el.slice(startString.length)).join('-');
}
