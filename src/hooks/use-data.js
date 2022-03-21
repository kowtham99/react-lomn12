import { useState } from "react";

const data = [
  {
    id: "id1",
    title: "Title 1",
    imageUrl: "https://picsum.photos/id/0/367/267",
    description: "Lorem ipsum dolor sit amet. Nam quaerat maiores",
  },
  {
    id: "id2",
    title: "Title 2",
    imageUrl: "https://picsum.photos/id/9/367/267",
    description: "Lorem ipsum dolor sit amet. Nam quaerat maiores",
  },
  {
    id: "id3",
    title: "Title 3",
    imageUrl: "https://picsum.photos/id/15/367/267",
    description: "Lorem ipsum dolor sit amet. Nam quaerat maiores",
  },
];

const useData = () => {
  const [items, setItems] = useState(data);
  const [isLoading, setIsloading] = useState(false);

  useState(() => {
    setIsloading(true);
    const timer = setTimeout(() => {
      setIsloading(false);
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  const deleteById = (id) => {
    setItems((prev) => {
      const filtered = prev.filter((item) => item.id !== id);
      return filtered;
    });
  };
  return {
    items,
    isLoading,
    deleteById,
  };
};

export default useData;
