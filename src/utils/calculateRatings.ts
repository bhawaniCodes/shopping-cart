
type totalRatingProp = number;
const maxStars = 5;

export const calculateRatings = (totalRating: totalRatingProp) => {
    const fullStars = Math.floor(totalRating);
    const halfStars = ((totalRating - fullStars) > 0) ? 1 : 0;
    const emptyStars = maxStars - fullStars - halfStars;

    return {fullStars, halfStars, emptyStars}
}