import React, { useContext, useEffect, useState } from 'react';
import Link from 'next/link';
import { getCategories } from '../services';
const categories = [
  { name: 'React', slug: 'react' },
  { name: 'Web Dev', slug: 'webdev' },
];
const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((result) => {
      setCategories(result);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left block">
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">
              Haliday's Journal
            </span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((c) => (
            <Link key={c.name} href={`/category/${c.slug}`}>
              <span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">
                {c.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
