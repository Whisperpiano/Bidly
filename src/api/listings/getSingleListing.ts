import { NOROFF_API } from "../../lib/constants";

export default async function getListings() {
  try {
    const response = await fetch(
      `${NOROFF_API.auctions.listings}?_seller=true`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
}
