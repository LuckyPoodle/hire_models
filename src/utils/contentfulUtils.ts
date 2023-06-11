import { QueryFunction } from "@tanstack/react-query";
import { TypeSupermodelsFields } from "./APIResponsesTypes";

const contentful = require("contentful");

const contentfulclient = contentful.createClient({
  space: process.env.REACT_APP_contentfulspaceid,
  accessToken: process.env.REACT_APP_contentfulaccesstoken,
});

const fetchAModelFromContentful: QueryFunction<TypeSupermodelsFields, ["modeldetails", string]> = async ({ queryKey }) => {
  try {
    const id = queryKey[1];
    console.log(id);
    const res = await contentfulclient.getEntries({
      content_type: "supermodels",
      "fields.id": id,
    });
    return res.items[0].fields;
  } catch (e) {
    throw new Error(`fetching went wrong with ${e}`);
  }
};

const fetchSearch: QueryFunction<TypeSupermodelsFields[],
  ["search", { nationality: string; location: string; }]> = async ({ queryKey }) => {
    console.log("HIIII in fetchsearch");
    try {
      const {nationality, location } = queryKey[1];
      console.log(nationality);
      console.log(location)

      let temp:TypeSupermodelsFields[] = [];
      if (nationality.length > 0) {
        const res = await contentfulclient.getEntries({
          content_type: "supermodels",
          "fields.nationality": nationality,
        });

        res.items.forEach((item:any) => {
          temp.push(item.fields);
        });
        return temp;
      } else if (location.length > 0) {
        const res = await contentfulclient.getEntries({
          content_type: "supermodels",
          "fields.location": location,
        });

        res.items.forEach((item:any) => {
          temp.push(item.fields);
        });
        return temp;
      } else {
        const res = await contentfulclient.getEntries({
          content_type: "supermodels",
        });

        res.items.forEach((item:any) => {
          temp.push(item.fields);
        });
        return temp;
      }
    } catch (e) {
      throw new Error("fetching models with search went wrong");
    }
  }

// const fetchModelsFromContentful: QueryFunction<IModelAPIResponse,> = async (name, nationality, location) => {
//   let temp = [];
//   if (name.length > 0) {
//     const res = await contentfulclient.getEntries({
//       content_type: "supermodels",
//       "fields.name": name,
//     });

//     res.items.forEach((item) => {
//       temp.push(item.fields);
//     });
//     return temp;
//   } else if (nationality.length > 0) {
//     const res = await contentfulclient.getEntries({
//       content_type: "supermodels",
//       "fields.nationality": nationality,
//     });

//     res.items.forEach((item) => {
//       temp.push(item.fields);
//     });
//     return temp;
//   } else if (location.length > 0) {
//     const res = await contentfulclient.getEntries({
//       content_type: "supermodels",
//       "fields.location": location,
//     });

//     res.items.forEach((item) => {
//       temp.push(item.fields);
//     });
//     return temp;
//   } else {
//     const res = await contentfulclient.getEntries({
//       content_type: "supermodels",
//     });

//     res.items.forEach((item) => {
//       temp.push(item.fields);
//     });
//     return temp;
//   }
// };

export { fetchAModelFromContentful, fetchSearch };
