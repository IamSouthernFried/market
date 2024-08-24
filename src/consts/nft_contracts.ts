import type { Chain } from "thirdweb";
import { vitruveo } from "./chains";

export type NftContract = {
  address: string;
  chain: Chain;
  type: "ERC1155" | "ERC721";

  title?: string;
  description?: string;
  thumbnailUrl?: string;
  slug?: string;
};

/**
 * Below is a list of all NFT contracts supported by your marketplace(s)
 * This is of course hard-coded for demo purpose
 *
 * In reality, the list should be dynamically fetched from your own data source
 */
export const NFT_CONTRACTS: NftContract[] = [
  {
    address: "0x789825ddaA3C41ef2876B6F152996681B6242253",
    chain: vitruveo,
    type: "ERC721",
    title: "The National Fentanyl Awareness Day Charity 2024",
    description: "",
    thumbnailUrl:"",
    slug?:"",
  },
];
