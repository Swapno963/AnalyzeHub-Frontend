export function GetDataForSummary(data) {
  let arr = [
    { group: "intensity", values: [] },
    { group: "likelihood", values: [] },
    { group: "relevance", values: [] },
  ];
  data?.forEach((dt) => {
    // console.log(dt);
    arr[0].values.push(dt?.intensity);
    arr[1].values.push(dt?.likelihood);
    arr[2].values.push(dt?.relevance);
  });

  //   console.log("arr", arr);
  return arr;
}
