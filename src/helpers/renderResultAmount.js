export const renderResultAmount = (result) => {
    if (result > 0) {
        return <p className="green-text">${result}</p>;
      } else if (result < 0) {
        return <p className="red-text">${result}</p>;
      } else {
        return <p className="neutral-text">${result}</p>;
      }
}