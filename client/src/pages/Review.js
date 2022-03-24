const Review = (props) => {
  return (
    <form onSumbit={props.onSubmit}>
      <label>
        Rate out of 5:
        <input type="text" name="rating" />
      </label>
      <label>
        Leave a review:
        <input type="text" name="review" />
      </label>
      <button type="submit">Submit form</button>
    </form>
  )
}

// Need to add this info to our database

export default Review
