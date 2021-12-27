export async function floodData() {
  const response = await fetch(
    "http://environment.data.gov.uk/flood-monitoring/id/floods"
  );
  const floodData = await response.json();
  return floodData;
}
