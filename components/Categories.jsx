import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';
const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((result) => {
      setCategories(result);
    });
  }, []);

  return (
    <div className="bg-white shadow-lg rounded-lg p-4 mb-8">
      <h3 className="text-xl text-violet-600 mb-8 font-semibold border-b pb-4">
        Categories
      </h3>
      {categories.map((cat) => (
        <Link className="w-full " href={`/category/${cat.slug}`} key={cat.slug}>
          <span className="cursor-pointer ml-4 block rounded-lg bg-gray-100 border-b pb-3 p-3 mb-3">
            {' '}
            {cat.name}
          </span>
        </Link>
      ))}
    </div>
  );
};

export default Categories;
