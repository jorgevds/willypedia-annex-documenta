import { images } from "../../../data";

export default ({ query: { id } }, res) => {
  const filtered = images.filter((p) => p.id === id);

  // User with id exists
  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res.status(404).json({ message: `Photo with id: ${id} not found.` });
  }
};
