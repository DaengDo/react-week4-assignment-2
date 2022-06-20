export default function Categories({ categories }) {
  return (
    <>
      <ul>
        {restaurants.map((category) => (
          <li key={category.id}>{category.name}</li>
        ))}
      </ul>
    </>
  );
}
