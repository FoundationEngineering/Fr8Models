import { RatingCard } from '../domain/quote/ratingCard';
export class GetRatingCardsResponse {
    constructor(public ratingCards?: RatingCard[]){}
}
