import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex gap-5">
      <Link href="/todo-list">Todo List</Link>
      <Link href="/product-filter-search">Product Filter Search</Link>
    </main>
  );
}
