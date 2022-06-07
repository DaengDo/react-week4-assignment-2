export default function RestaurantForm({ restaurant, onChange, onClick }) {
  return (
    <form>
      <input
        type="text"
        name="name"
        value={restaurant.name}
        onChange={() => {}}
      />
      <input
        type="text"
        name="category"
        value={restaurant.category}
        onChange={() => {}}
      />
      <input
        type="text"
        name="adress"
        value={restaurant.adress}
        onChange={() => {}}
      />
      <button type="submit" onClick={onClick}>
        등록
      </button>
    </form>
  );
}
