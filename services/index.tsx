import request, { gql } from "graphql-request";

export const getCarsList = async () => {
  const query = gql`
    query CarLists {
      carLists {
        carAvg
        createdAt
        id
        name
        price
        publishedAt
        updatedAt
        image {
          url
        }
        carType
        carBrand
      }
    }
  `;

  const result = await request(
    "https://api-us-east-1-shared-usea1-02.hygraph.com/v2/cllkldth100i201t7djpo0ja7/master",
    query
  );
  return result;
};


//furthuee solutions
