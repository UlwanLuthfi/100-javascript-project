import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex gap-5">
      <Link href="/todo-list">Todo List</Link>
      <Link href="/product-filter-search">Product Filter Search</Link>
      <Link href="/roll-the-dice">Roll the Dice</Link>
      <Link href="/age-calculator">Age Calculator</Link>
      <Link href="/number-counting-animation">Number Counting Animation</Link>
    </main>
  );
}
