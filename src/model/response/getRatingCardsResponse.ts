import { RatingCard } from '../domain/quote/ratingCard/ratingCard';
export class GetRatingCardsResponse {
    constructor(public ratingCards?: RatingCard[]){}
}
