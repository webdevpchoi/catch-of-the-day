import React from "react";

class AddFishForm extends React.Component {
  render() {
    return (
      <form className="fish-edit">
        <input type="text" name="name" placeholder="name" />
        <input type="text" name="price" placeholder="price" />
        <select type="text" name="status" placeholder="status">
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>
        <textarea name="desc" placeholder="desc" />
        <input type="text" name="image" placeholder="image" />
      </form>
    );
  }
}

export default AddFishForm;
