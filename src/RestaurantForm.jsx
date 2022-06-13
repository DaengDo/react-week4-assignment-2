export default function RestaurantForm({ restaurant, onChange, onClick }) {
  function handleChange(event) {
    const {
      target: { name, value },
    } = event;

    onChange({ field: name, value });
  }

  return (
    <form>
      <input
        type="text"
        placeholder="이름"
        name="name"
        value={restaurant.name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="분류"
        name="category"
        value={restaurant.category}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="주소"
        name="address"
        value={restaurant.address}
        onChange={handleChange}
      />
      <button type="submit" onClick={onClick}>
        등록
      </button>
    </form>
  );
}
