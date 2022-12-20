import { StatType } from "./../../types/star-item";
import type { NextApiRequest, NextApiResponse } from "next";
import { StarItem } from "../../types/star-item";
import stats from "./data.json";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<{ data: StarItem[] }>
) {
  const key = req.query.year as string || new Date().getFullYear().toString();
  const data = (stats as StatType)[key];
  res.status(200).json({ data });
}
