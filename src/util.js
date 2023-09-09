export const statusListMap = {
  Pending: "list1",
  Processing: "list2",
  Done: "list3",
};

export const filterList = (data, list1, list2, list3) => {
  let updatedList1 = [...list1];
  let updatedList2 = [...list2];
  let updatedList3 = [...list3];

  const filterDataList1 = list1.filter((item) => {
    if (item.title.includes(data) || item.desc.includes(data)) {
      return item;
    }
  });
  const filterDataList2 = list2.filter((item) => {
    if (item.title.includes(data) || item.desc.includes(data)) {
      return item;
    }
  });
  const filterDataList3 = list3.filter((item) => {
    if (item.title.includes(data) || item.desc.includes(data)) {
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
