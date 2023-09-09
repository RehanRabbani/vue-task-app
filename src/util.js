export const statusListMap = {
  Pending: "list1",
  Processing: "list2",
  Done: "list3",
};

// Todo: refactoring for this util function
export const filterList = (data, toDate, fromDate, list1, list2, list3) => {
  let updatedList1 = [...list1];
  let updatedList2 = [...list2];
  let updatedList3 = [...list3];

  const startDate = fromDate;
  const endDate = toDate;

  const filterDataList1 = list1.filter((item) => {
    if (!item.time) return false;

    const itemDate = item.time;

    if (
      (itemDate >= startDate && itemDate <= endDate) ||
      item.title.includes(data) ||
      item.desc.includes(data)
    )
      return item;
  });

  const filterDataList2 = list2.filter((item) => {
    if (!item.time) return false;

    const itemDate = item.time;
    if (
      (itemDate >= startDate && itemDate <= endDate) ||
      item.title.includes(data) ||
      item.desc.includes(data)
    ) {
      return item;
    }
  });
  const filterDataList3 = list3.filter((item) => {
    if (!item.time) return false;

    const itemDate = item.time;
    if (
      (itemDate >= startDate && itemDate <= endDate) ||
      item.title.includes(data) ||
      item.desc.includes(data)
    ) {
      return item;
    }
  });
  updatedList1 = filterDataList1;
  updatedList2 = filterDataList2;
  updatedList3 = filterDataList3;

  return {
    updatedList1,
    updatedList2,
    updatedList3,
  };
};
